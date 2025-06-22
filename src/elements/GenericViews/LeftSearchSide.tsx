"use client";

import * as Yup from "yup";
import { FieldErrors, FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import TextInputField from "../Input/TextInputField";
import { PrimaryButton } from "../Buttons/PrimaryButton";

export const MainFormValidation = Yup.object().shape({
  searchString: Yup.string().required("City name is required"),
});

type LeftSearchSideProps = {
  isLoading: boolean;
  handleChange: (e: string) => void;
  handleClose: () => void;
};

type MainForm = {
  searchString: string;
};

const MainFormDefaultValues: MainForm = {
  searchString: "",
};

export const LeftSearchSide = ({
  isLoading,
  handleChange,
  handleClose,
}: LeftSearchSideProps) => {
  const { control, handleSubmit, ...rest } = useForm<MainForm>({
    resolver: yupResolver(MainFormValidation),
    defaultValues: MainFormDefaultValues,
  });

  const customHandleSubmit = async (
    dataResults: MainForm,
    e?: React.BaseSyntheticEvent
  ) => {
    e?.preventDefault();
    handleChange(dataResults?.searchString);
  };

  const onError = (errors: FieldErrors<MainForm>) => {
    console.warn(errors);
  };

  return (
    <div className="flex w-full flex-col items-center justify-center gap-4 px-2 sm:px-[1.563rem]">
      <h1 className="font-blue text-1xl text-center">
        Type in the city name
        <br />
        to find the weather forecast
      </h1>
      <div className="flex w-[70%] flex-col items-center justify-center gap-y-4 sm:w-[80%]">
        <FormProvider control={control} handleSubmit={handleSubmit} {...rest}>
          <form
            onSubmit={handleSubmit(customHandleSubmit, onError)}
            className="grow flex flex-col gap-y-4"
          >
            <div className="w-[300px] h-auto self-start">
              <TextInputField
                name={"searchString"}
                label={"City name here"}
                type={"string"}
                handleIconClick={handleClose}
              />
            </div>

            <div className="w-[240px] h-auto self-center flex justify-center">
              <PrimaryButton
                type={"submit"}
                isLoading={isLoading}
                onClick={() => null}
                buttonText={"Search"}
              />
            </div>
          </form>
        </FormProvider>
      </div>
    </div>
  );
};
