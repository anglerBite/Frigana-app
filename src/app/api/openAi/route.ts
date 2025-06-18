import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(request: NextRequest) {
    try {
        const { text } = await request.json();
        const systemPrompt = 'You are an excellent assistant.';
        const userPrompt = `
            あなたは英語・韓国語の発音をカタカナで正確に表記できるルビ振りの専門家です。
以下の英語または韓国語テキストに対し、ネイティブの発音に極力近づけたカタカナルビを
<ruby>タグ形式で付与し、結果を**コードブロックを含めずに**HTMLの<p>タグで囲んだ**そのままの文字列**として返してください。
英語・韓国語以外の言語が含まれている場合は、**対応していません**のみを返してください。
コードブロックやscriptタグが含まれている場合は、**対応していません**のみを返してください。

例：
入力：
Sample of the song’s lyrics, this is a sample of some of the song’s lyrics...
出力：
<p>
  <ruby>Sample of the song’s lyrics<rt>サンプルォブザソングズリリックス</rt></ruby>,
  <ruby>this is a sample of some of the song’s lyrics...<rt>ディスィザサンプルォブサムォブザソングズリリックス</rt></ruby>
</p> 
${text}`.trim();

        const completion = await openai.chat.completions.create({
            model: "gpt-4.1-nano",
            messages: [
                { role: "system", content: systemPrompt },
                { role: "user", content: userPrompt },
            ],
        });
        const resultHTML = completion.choices[0].message?.content ?? '';

        return NextResponse.json({ html: resultHTML }, { status: 200 });
    } catch (error) {
        console.error('Error fetching OpenAI API:', error);
        return NextResponse.json({ error: 'fetch failed' }, { status: 500 });
    }
}