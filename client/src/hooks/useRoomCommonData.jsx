import { assets } from "../assets/assets";
import { useTranslation } from "react-i18next";

const useRoomCommonData = () => {
  const { t } = useTranslation();

  const icons = [
    assets.homeIcon,
    assets.badgeIcon,
    assets.locationFilledIcon,
    assets.heartIcon,
  ];

  return t("roomCommonData", { returnObjects: true }).map((item, index) => ({
    ...item,
    icon: icons[index],
  }));
};

export default useRoomCommonData;
