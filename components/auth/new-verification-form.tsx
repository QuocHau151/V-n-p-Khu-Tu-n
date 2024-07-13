"use client";

import { useCallback, useEffect, useState } from "react";
import { BeatLoader } from "react-spinners";
import { useRouter, useSearchParams } from "next/navigation";

import newVerification from "@/actions/new-verification";
import { FormSuccess } from "./form-success";
import { FormError } from "./form-error";
import { on } from "events";
import { set } from "zod";

export const NewVerificationForm = () => {
  const [error, setError] = useState<string | undefined>();
  const [success, setSuccess] = useState<string | undefined>();
  const router = useRouter();
  const searchParams = useSearchParams();

  const token = searchParams.get("token");

  const onSubmit = useCallback(() => {
    if (success || error) return;

    if (!token) {
      setError("Missing token!");
      return;
    }

    newVerification(token)
      .then((data) => {
        setSuccess(data.success);
        setError(data.error);
      })
      .catch(() => {
        setError("Something went wrong!");
      });
  }, [token, success, error]);

  useEffect(() => {
    onSubmit();
  }, [onSubmit]);
  useEffect(() => {
    setTimeout(() => {
      window.close();
    }, 5000);
  }, [success]);

  const onLogin = useCallback(() => {
    router.push("/login");
  }, [router]);

  return (
    <div>
      <div className="bg-[url('/assets/images/Untitled-1.jpg')] h-[100vh]  bg-cover bg-no-repeat bg-center flex flex-col items-center justify-center">
        <div className="bg-white bg-opacity-95 rounded-[30px] flex flex-col gap-6 items-center  p-[50px] max-md:p-[30px] max-md:w-4/5">
          <div className="text-center">
            <h1 className="text-[45px] font-semibold text-slate-800  max-md:text-[25px]">
              Xác thực tài khoản
            </h1>
            <p className="text-[18px] text-slate-600  max-md:text-[12px]">
              Vui lòng chờ trong giây lát
            </p>
          </div>

          <div className="flex flex-col items-center w-full justify-center">
            {!success && !error && <BeatLoader />}

            {error && (
              <>
                <FormSuccess message={"Xác thực thành công"} />
                <button className=" max-md:text-[12px]" onClick={onLogin}>
                  Về trang đăng nhập{" "}
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
