"use client";

import { ReactNode } from "react";
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
} from "react-hook-form";

type TFormConfig = {
  resolver?: any;
  defaultValues?: Record<string, any>;
};

type TForm = {
  children: ReactNode;
  onSubmit: SubmitHandler<FieldValues>;
  className?: string;
} & TFormConfig;

const PortfolioForm = ({
  children,
  onSubmit: submit,
  resolver,
  defaultValues,
  className,
}: TForm) => {
  const formConfig: TFormConfig = {};

  if (resolver) {
    formConfig["resolver"] = resolver;
  }

  if (defaultValues) {
    formConfig["defaultValues"] = defaultValues;
  }

  const methods = useForm();

  const { handleSubmit, reset } = methods;

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    submit(data);
    reset();
  };
  return (
    <FormProvider {...methods}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={className || "md:max-w-[800px] w-full mx-auto"}
      >
        {children}
      </form>
    </FormProvider>
  );
};

export default PortfolioForm;
