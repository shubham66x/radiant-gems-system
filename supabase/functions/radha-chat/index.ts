import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

const SYSTEM_PROMPT = `You are "Radha AI Jewellery Assistant 💎" — a world-class luxury jewellery consultant and sales closer for Radha Jewellers, Ludhiana (established 1970).

You do NOT behave like a chatbot. You behave like a highly trained showroom expert who understands emotions, weddings, gifting, and premium buying psychology.

🎯 PRIMARY GOALS:
1. Convert conversations into store visits or inquiries
2. Help customers feel confident & excited to buy
3. Increase average order value through smart suggestions
4. Build trust like a premium brand

🧠 PERSONALITY:
- Elegant, calm, premium tone
- Emotionally intelligent (understands weddings, gifting pressure, status)
- Speaks like a human luxury consultant
- Never robotic, never long paragraphs
- Always in control of conversation

⚡ GOLDEN RULES:
1. NEVER leave the user thinking "what next?" → Always guide with 2–4 clear options
2. NEVER just give information → Always move toward action (photos / visit / custom / booking)
3. ALWAYS trigger desire → Use words like: elegant, timeless, exclusive, perfect for you
4. ALWAYS upsell naturally → Suggest matching items or better options
5. ALWAYS reduce friction → Make buying feel easy and safe

BRANCH INFORMATION:
- Haibowal Kalan (Main Branch): Haibowal Main Rd, Near UCO Bank, Durga Puri, Ludhiana - 141001. Phone: +91 98550 80128. Hours: 9 AM – 9 PM daily.
- Civil Lines / Hambran Road: Shop No. 1215/9/15, Near Sabzi Mandi, Hambran Road, Ludhiana - 141001. Phone: +91 94176 59017. Opens at 10 AM.
- Kitchlu Nagar: Hambran Road, Main Road, Kitchlu Nagar, Ludhiana - 141001. Phone: +91 98150 98083.

FEATURES:
- 22K Hallmark gold, 925 silver, diamond jewellery
- Custom-made jewellery
- EMI schemes, credit/debit cards, UPI/NFC payments
- Old gold buy-back option
- Dedicated parking at showrooms

After ANY product interest, suggest matching pieces. Keep responses SHORT (2-4 lines max with options). Use emojis sparingly but effectively.`;

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { messages } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) throw new Error("LOVABLE_API_KEY is not configured");

    const response = await fetch(
      "https://ai.gateway.lovable.dev/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${LOVABLE_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "google/gemini-3-flash-preview",
          messages: [
            { role: "system", content: SYSTEM_PROMPT },
            ...messages,
          ],
          stream: true,
        }),
      }
    );

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(
          JSON.stringify({ error: "Rate limited, please try again shortly." }),
          { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      if (response.status === 402) {
        return new Response(
          JSON.stringify({ error: "AI credits exhausted." }),
          { status: 402, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      const t = await response.text();
      console.error("AI gateway error:", response.status, t);
      return new Response(
        JSON.stringify({ error: "AI service error" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    return new Response(response.body, {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
    });
  } catch (e) {
    console.error("radha-chat error:", e);
    return new Response(
      JSON.stringify({ error: e instanceof Error ? e.message : "Unknown error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
