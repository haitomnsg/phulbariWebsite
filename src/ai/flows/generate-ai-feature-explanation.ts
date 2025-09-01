'use server';
/**
 * @fileOverview AI feature explanation flow for the Phulbari app.
 *
 * - generateAiFeatureExplanation - A function that generates the AI feature explanation.
 * - GenerateAiFeatureExplanationInput - The input type for the generateAiFeatureExplanation function.
 * - GenerateAiFeatureExplanationOutput - The return type for the generateAiFeatureExplanation function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateAiFeatureExplanationInputSchema = z.object({
  flowerClassificationDetails: z.string().describe('Detailed information about how the AI classifies flowers.'),
  diseaseDetectionDetails: z.string().describe('Detailed information about how the AI detects plant diseases.'),
});
export type GenerateAiFeatureExplanationInput = z.infer<typeof GenerateAiFeatureExplanationInputSchema>;

const GenerateAiFeatureExplanationOutputSchema = z.object({
  explanation: z.string().describe('A clear and concise explanation of how the Phulbari app uses AI to classify flowers and detect diseases.'),
});
export type GenerateAiFeatureExplanationOutput = z.infer<typeof GenerateAiFeatureExplanationOutputSchema>;

export async function generateAiFeatureExplanation(input: GenerateAiFeatureExplanationInput): Promise<GenerateAiFeatureExplanationOutput> {
  return generateAiFeatureExplanationFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateAiFeatureExplanationPrompt',
  input: {schema: GenerateAiFeatureExplanationInputSchema},
  output: {schema: GenerateAiFeatureExplanationOutputSchema},
  prompt: `You are an AI assistant specializing in explaining complex AI functionalities in a simple and engaging manner for a general audience.

  Given the following details about the AI features of the Phulbari app, create a clear and concise explanation of how the app uses AI to classify flowers and detect diseases. The explanation should highlight the benefits to the user and encourage them to try the app.

  Flower Classification Details: {{{flowerClassificationDetails}}}
  Disease Detection Details: {{{diseaseDetectionDetails}}}

  Explanation:`,
});

const generateAiFeatureExplanationFlow = ai.defineFlow(
  {
    name: 'generateAiFeatureExplanationFlow',
    inputSchema: GenerateAiFeatureExplanationInputSchema,
    outputSchema: GenerateAiFeatureExplanationOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
