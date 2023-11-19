import Link from "next/link"
import BMI from "../BMI"

type StepType = {
    height: any,
    weight: any,
    kcal:any,
}

const RegistrationSuccess = ({height,weight,kcal}: StepType) => {
    return (
        <div className="otp sign-up">
            <div className="content26">
                <div className="heading-and-supporting-text3">
                    <div className="title">
                        <b className="heading26 regis_success">
                            <p className="chc-mng">CHÚC MỪNG</p>
                            <p className="chc-mng">BẠN ĐÃ HOÀN THÀNH ĐĂNG KÍ</p>
                        </b>
                    </div>
                </div>
                <div className="frame-parent14">
                    <BMI height={height} weight={weight} />
                    <div className="ch-s-bmi-parent">
                        <div className="ch-s-bmi font-size24">Năng lượng</div>
                        <div className="data-parent">
                            <div className="data position-relative">
                                <div className="data-child"></div>
                                <div className="div6">{kcal}</div>
                            </div>
                            <div className="cn-i">Kcal/ ngày</div>
                        </div>
                    </div>
                </div>
                <div className="content-inner">
                    <div className="button-wrapper">
                        <Link className="button49" href="/">
                            <a className="button49">
                                <span className="text68-button font-size14">Khám phá món ăn ngay hôm nay</span>
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RegistrationSuccess
  