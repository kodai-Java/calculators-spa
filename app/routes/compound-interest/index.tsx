import { Button, TextField } from "@mui/material";
import { FC, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

type CompoundInterestForm = {
  annualRate: number;
  years: number;
  principal: number;
};
export const CompoundInterest:FC = () => {
    const [resultMoney, setResultMoney] = useState<number>();
    /**
   * 複利計算
   */
  const calculateCompoundInterest = (data: CompoundInterestForm) => {
    const { annualRate, principal, years } = data;
    const decimalAnnualRate = annualRate / 100 + 1;
    // 年率、年数、積立前の元金を複利計算する
    const resultMoney = Math.round(
      principal * Math.pow(decimalAnnualRate, years)
    );
    setResultMoney(resultMoney);
  };
  const { register, handleSubmit } = useForm<CompoundInterestForm>();
  const onSubmit: SubmitHandler<CompoundInterestForm> =
    calculateCompoundInterest;
    return (
    <div className="flex justify-center">
      <form
        className="flex flex-col gap-4 w-40 text-center"
        onSubmit={handleSubmit(onSubmit)}
      >
        <TextField
          id="outlined-number"
          label="年率(%)"
          type="number"
          variant="standard"
          {...register("annualRate")}
        />
        <TextField
          id="outlined-number"
          label="積立年数(年)"
          type="number"
          variant="standard"
          {...register("years")}
        />
        <TextField
          id="outlined-number"
          label="積立前の元金(円)"
          type="number"
          variant="standard"
          {...register("principal")}
        />
        <Button variant="contained" type="submit">
          計算
        </Button>
        <div className="flex flex-row gap-1 justify-center">
          <div>結果</div>
          <div>{resultMoney}円</div>
        </div>
      </form>
    </div>
  );
}

export default CompoundInterest;
