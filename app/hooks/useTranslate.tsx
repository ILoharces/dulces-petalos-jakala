import { useEffect, useState } from "react";
import translate from "translate";

export const useTranslate = (text: string, from: string = "en", to: string = "es") => {
  const [translatedText, setTranslatedText] = useState<string>(text);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const translateText = async () => {
      if (!text) {
        setTranslatedText(text);
        setIsLoading(false);
        return;
      }

      try {
        setIsLoading(true);
        const translated = await translate(text, { from, to });
        setTranslatedText(translated);
      } catch (error) {
        console.error("Error translating text:", error);
        setTranslatedText(text);
      } finally {
        setIsLoading(false);
      }
    };

    translateText();
  }, [text, from, to]);

  return { translatedText, isLoading };
};
