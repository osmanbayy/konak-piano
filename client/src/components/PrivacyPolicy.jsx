import React from "react";
import { Trans, useTranslation } from "react-i18next";

const PrivacyPolicy = () => {
  const { t } = useTranslation();
  return (
    <section className="max-w-3xl mx-auto px-6 py-10 text-gray-100 font-sans">
      <h2 className="text-3xl font-bold text-center mb-8 text-zinc-200 flex items-center justify-center gap-2">
        {t("privacyPolicy")}
      </h2>

      <div className="space-y-8">
        <div>
          <h3 className="text-xl font-semibold text-zinc-100 mb-2">
            1. {t("privacyPolicyHeader1")}
          </h3>
          <p className="text-gray-200 leading-relaxed">
            <Trans
              i18nKey="privacyPolicyLine1"
              values={{ hotelName: "Konak Piano" }}
              components={{
                strong: <strong className="font-semibold text-amber-300" />,
              }}
            />
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-zinc-100 mb-2">
            2. {t("privacyPolicyHeader2")}
          </h3>
          <p className="text-gray-200 leading-relaxed">
            {t("privacyPolicyLine2")}
            <br />- {t("privacyPolicyLine2.1")}
            <br />- {t("privacyPolicyLine2.2")}
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-zinc-100 mb-2">
            3. {t("privacyPolicyHeader3")}
          </h3>
          <p className="text-gray-200 leading-relaxed">
            {t("privacyPolicyLine3")}.
            <br /> {t("privacyPolicyLine3.1")}
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-zinc-100 mb-2">
            4. {t("privacyPolicyHeader4")}
          </h3>
          <p className="text-gray-200 leading-relaxed">
            {t("privacyPolicyLine4")}
            <br />
            {t("privacyPolicyLine4.1")}
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-zinc-100 mb-2">
            5. {t("privacyPolicyHeader5")}
          </h3>
          <p className="text-gray-200 leading-relaxed">
            {t("privacyPolicyLine5")}
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-zinc-100 mb-2">
            6. {t("privacyPolicyHeader6")}
          </h3>
          <p className="text-gray-200 leading-relaxed">
            {t("privacyPolicyLine6")}
          </p>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
