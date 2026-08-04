import { serve } from 'https://deno.land/std@0.168.0/http/server.ts';
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.38.0';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req: any) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    const { message, history } = await req.json();

    const supabase = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_ANON_KEY') ?? ''
    );

    // Fetch context data from Supabase tables
    const [{ data: profile }, { data: projects }, { data: skills }] = await Promise.all([
      supabase.from('profile').select('*').single(),
      supabase.from('projects').select('*'),
      supabase.from('skills').select('*'),
    ]);

    const systemPrompt = `You are Kaveesha Vimukthi's AI portfolio assistant. Answer user questions about Kaveesha's background, skills, and projects concisely and accurately using the context below.

CONTEXT DATA:
Profile: ${JSON.stringify(profile)}
Projects: ${JSON.stringify(projects)}
Skills: ${JSON.stringify(skills)}

Guidelines:
- Be friendly, technical, and concise.
- Highlight project metrics and tech stacks when relevant.
- If asked about contacting Kaveesha, encourage using the contact form or email kaveeshavimukthi688@gmail.com.`;

    const anthropicApiKey = Deno.env.get('ANTHROPIC_API_KEY');
    if (!anthropicApiKey) {
      return new Response(
        JSON.stringify({
          response: `Kaveesha is an IT Undergraduate at the University of Kelaniya focusing on Cyber Security, Web Development, Game Development (C++/Raylib), and Graphic Design & Video Editing. Feel free to explore his projects above or email kaveeshavimukthi688@gmail.com!`,
        }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const aiRes = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'x-api-key': anthropicApiKey,
        'anthropic-version': '2023-06-01',
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        model: 'claude-3-5-sonnet-20241022',
        max_tokens: 500,
        system: systemPrompt,
        messages: [{ role: 'user', content: message }],
      }),
    });

    const aiData = await aiRes.json();
    const replyText = aiData?.content?.[0]?.text || "Thanks for your question! Feel free to ask about Kaveesha's tech stack, design samples, or projects.";

    return new Response(
      JSON.stringify({ response: replyText }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  } catch (error: any) {
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
