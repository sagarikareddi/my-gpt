import { Configuration } from "openai";
export const configureOpenAI = () => {
    console.log(process.env.OPEN_AI_SECRET);
    const config = new Configuration({
        apiKey: process.env.OPEN_AI_SECRET,
        organization: process.env.OPENAI_ORAGANIZATION_ID,
    });
    console.log(config);
    return config;
};
//# sourceMappingURL=openai-config.js.map
