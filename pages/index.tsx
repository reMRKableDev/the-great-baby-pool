import type { NextPage } from "next";
import type { HomeProps, Baby, Record } from "../common/types";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { Constants } from "../utils/constants";

import Layout from "../components/layout";
/* import GridWrapper from "../components/gridWrapper"; */

ChartJS.register(ArcElement, Tooltip, Legend);

const Home: NextPage<HomeProps> = ({ fieldsData, total, percentage }) => {
  const data = {
    labels: [`Girl (${percentage[0]}%)`, `Boy (${percentage[1]}%)`],
    datasets: [
      {
        data: total,
        backgroundColor: ["#FCF0BD", "#ABC485"],
        hoverBackgroundColor: ["#DEB921", "#455E1F"],
        borderColor: ["#DEB921", "#455E1F"],
        hoverBorderColor: ["#F7CE25", "#749E35"],
      },
    ],
  };

  return (
    <Layout>
      <h1 className="text-6xl font-bold">The Results</h1>
      <div className="max-h-[500px] w-full flex justify-center">
        <Doughnut data={data} />
      </div>
      {/* {fieldsData && <GridWrapper data={fieldsData} />} */}
    </Layout>
  );
};

export const getServerSideProps = async () => {
  const res = await fetch(Constants.WEBSITE_URL);
  const { records } = await res.json();

  if (!records) {
    return;
  }

  const fieldsData = records.map((record: Record) => record.fields);

  const calculatePercentage = (count: number, total: number): number =>
    (count / total) * 100;

  const calculateGenders = (
    babies: Baby[]
  ): { total: Array<number>; percentage: Array<number> } => {
    let boys = 0;
    let girls = 0;

    for (const baby of babies) {
      const gender = baby["Baby Gender"];

      if (gender === "Boy") {
        boys++;
      } else if (gender === "Girl") {
        girls++;
      }
    }

    const totalBabies = boys + girls;
    const boysPercentage = Number(
      calculatePercentage(boys, totalBabies).toFixed(2)
    );
    const girlsPercentage = Number(
      calculatePercentage(girls, totalBabies).toFixed(2)
    );

    return {
      total: [girls, boys],
      percentage: [girlsPercentage, boysPercentage],
    };
  };

  const { total, percentage } = calculateGenders(fieldsData);

  return {
    props: {
      fieldsData,
      total,
      percentage,
    },
  };
};

export default Home;
