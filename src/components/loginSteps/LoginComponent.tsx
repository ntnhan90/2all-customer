import { useForm } from "react-hook-form";
import { server } from "../../utils/server";
import { useState } from "react";
import "react-phone-number-input/style.css";
import PhoneInput  from "react-phone-number-input";
import { toast } from "react-toastify";

type StepType = {
  onChange: any;
  setPhone: any;
};

const LoginComponent = ({ onChange, setPhone }: StepType) => {
  const { handleSubmit} = useForm();
  // const [value,setValue] = useState()
  const [value, setValue] = useState<string | undefined>();
  const [error, setError] = useState<string>();
  const onSubmit = async () => {
    var phone = value;
    console.log(phone);
    setPhone(phone);
    if (phone) {
        if (phone.length == 12) {
          toast.success(" Success!", { autoClose: 1500 });
                  setTimeout(() => {
                    onChange(2);
                  }, 3000);
          /*
            phone = phone.substring(1);
            await fetch(`${server}auth/requestOTP`, {
              method: "post",
              mode: "cors",
              cache: "no-cache",
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
              },
              credentials: "include",
              body: JSON.stringify({
                phoneNumber: phone,
              }),
            })
            .then((res) => res.json())
            .then((json) => {
                console.log(json);
                if (json.status == "success") {
                  toast.success(" Success!", { autoClose: 1500 });
                  setTimeout(() => {
                    onChange(2);
                  }, 3000);
                }
            })
            .catch((error) => {
                console.log(error);
            });
            */
        } else {
            toast.error(" Fail!", { autoClose: 1500 });
            setError("Số điện thoại của bạn dường như chưa chính xác.");
        }
    } else {
        toast.error(" Fail!", { autoClose: 1500 });
      setError("Vui lòng nhập số điện thoại của bạn");
    }
  };

  return (
    <div className="sign-up">
      <div className="image-login-page">
        <div className="image-login-page-child"></div>
        <img src="/images/login_image.png" alt="product" />
      </div>
      <div className="content26">
        <div className="title">
          <b className="heading26">
            Đặt ngay bữa ăn ngon & lành của riêng bạn!
          </b>
        </div>
        <div className="input-field-parent">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="input-field4">
              <div className="input-with-label6">
                <div className="label6">Điền số điện thoại của bạn</div>
                <div className="input-field5">
                  <div className="input-with-label6">
                    <PhoneInput
                      className="input77"
                      international
                      defaultCountry="VN"
                      value={value}
                      onChange={setValue}
                      rules={{
                        required: true,
                      }}
                    />
                  </div>
                  {error && (
                    <div style={{ color: "red", fontSize: "12px" }}>
                      {error}
                    </div>
                  )}
                  <div className="hint-text6">
                    This is a hint text to help user.
                  </div>

                </div>
              </div>
              <div className="hint-text7">
                Chúng tôi sẽ gửi tới số điện thoại bạn đăng ký mã số OTP để kích
                hoạt tài khoản
              </div>
            </div>
            <button className="button49 mt-3 " type="submit">
              <span className="text69">Tiếp tục</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginComponent;




