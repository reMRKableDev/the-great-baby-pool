import type { Props, Baby, Column } from "../common/types";
import { Constants } from "../utils/constants";

const { BG_GREEN, BG_YELLOW } = Constants;

// TODO: finish this component
const BabyGrid = ({
  listOne,
  listTwo,
}: {
  listOne: Array<Baby>;
  listTwo: Array<Baby>;
}) => {
  const columns: Array<Column> = [
    { title: "Boy", data: listOne },
    { title: "Girl", data: listTwo },
  ];

  const BabyColumn = ({
    title,
    data,
  }: {
    title: string;
    data: Array<Baby>;
  }) => {
    return (
      <div className="w-1/2">
        <h2 className="text-2xl font-bold mb-4 md:text-4xl">{title}</h2>
        {data &&
          data.map((baby) => (
            <div
              key={baby.Name}
              className={` w-1/2 py-4 mb-4 border-2 bg-[${
                title === "Boy" ? BG_GREEN : BG_YELLOW
              }`}
            >
              <p className="font-bold">{baby.Name}</p>
              <p>{baby["Baby Date Of Birth"]}</p>
            </div>
          ))}
      </div>
    );
  };

  return (
    <div className="flex justify-between border-2 border-black w-full h-60 overflow-x-auto">
      {columns.map((column) => (
        <BabyColumn
          key={column.title}
          title={column.title}
          data={column.data}
        />
      ))}
    </div>
  );
};

const BabyGridWrapper = ({ data }: Props) => {
  const boyBabies = data.filter((baby) => baby["Baby Gender"] === "Boy");
  const girlBabies = data.filter((baby) => baby["Baby Gender"] === "Girl");

  return <BabyGrid listOne={boyBabies} listTwo={girlBabies} />;
};

export default BabyGridWrapper;
