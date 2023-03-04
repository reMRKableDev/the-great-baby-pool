import type { NextPage } from "next";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { Constants } from "../utils/constants";

import Layout from "../components/layout";

ChartJS.register(ArcElement, Tooltip, Legend);

interface LayoutProps {
  total: Array<number>;
  percentage: Array<number>;
}

const Home: NextPage<LayoutProps> = ({ total, percentage }) => {
  const data = {
    labels: ["Girl", "Boy"],
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
      <div className="max-h-[600px] w-full flex justify-center">
        <Doughnut data={data} />
      </div>
    </Layout>
  );
};

export const getServerSideProps = async () => {
  const res = await fetch(Constants.WEBSITE_URL);
  const { records } = await res.json();

  if (!records) {
    return;
  }

  enum Gender {
    Boy = "Boy",
    Girl = "Girl",
  }
  interface Baby {
    "Baby Date Of Birth": string;
    "Baby Gender": Gender;
    Name: string;
  }

  interface Record {
    id: string;
    createdTime: string;
    fields: Baby;
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

      if (gender === Gender.Boy) {
        boys++;
      } else if (gender === Gender.Girl) {
        girls++;
      }
    }

    const totalBabies = boys + girls;
    const boysPercentage = calculatePercentage(boys, totalBabies);
    const girlsPercentage = calculatePercentage(girls, totalBabies);

    return {
      total: [girls, boys],
      percentage: [girlsPercentage, boysPercentage],
    };
  };

  const { total, percentage } = calculateGenders(fieldsData);

  return {
    props: {
      total,
      percentage,
    },
  };
};

export default Home;
