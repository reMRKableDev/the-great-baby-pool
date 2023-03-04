import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { Constants } from "../utils/constants";

ChartJS.register(ArcElement, Tooltip, Legend);

const Home: NextPage = (props: {} | any) => {
  console.log("🚀 ~ file: index.tsx:11 ~ props:", props);
  const data = {
    labels: ["Girl", "Boy"],
    datasets: [
      {
        data: props.total,
        backgroundColor: ["#FF6384", "#36A2EB"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB"],
      },
    ],
  };
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>The Great Baby Pool</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center gap-4">
        <h1 className="text-6xl font-bold">The Great Baby Pool: Your Bets</h1>
        <div className="h-[500px] w-full flex justify-center">
          <Doughnut data={data} />
        </div>
      </main>

      <footer className="flex h-24 w-full items-center justify-center border-t">
        <a
          className="flex items-center justify-center gap-2"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </a>
      </footer>
    </div>
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
