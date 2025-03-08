import styles from "../styles";
import Image from "next/image";

interface NewFeaturesProps {
    imgUrl: string;
    title: string;
    subtitle: string;
}

const NewFeatures: React.FC<NewFeaturesProps> = ({ imgUrl, title, subtitle }) => (
    <div className="flex-1 flex flex-col sm:max-w-[250px] min-w-[210px]">
        <div
            className={`${styles.flexCenter} w-[70px] h-[70px] rounded-[24px] bg-gray-300 `}
        >
            <Image src={imgUrl} alt="img" />
        </div>
        <h1 className="mt-[26px] font-bold text-[24px] text-gray-900 leading-[30px]">
            {title}
        </h1>
        <p className="flex-1 mt-[16px] font-normal text-[18px] text-gray-800 leading-[32px]">
            {subtitle}
        </p>
    </div>
);

export default NewFeatures; 