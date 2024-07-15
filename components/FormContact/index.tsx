import React, { FormEvent, useState } from "react";
import s from "./style.module.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function FormContact() {
  const [value, setValue] = useState({
    fullName: "",
    phone: "",
    email: "",
    typeService: "",
    content: "",
  });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const promise = fetch("/api/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(value),
    }).then((response) => {
      if (!response.ok) {
        throw new Error("Có lỗi xày ra, vui lòng thử lại");
      }
      return response;
    });
    
    toast.promise(
      promise,
      {
        pending: 'Đang gửi thông tin...',
        success: 'Chúng tôi đã nhận được thông tin! 🎉',
        error: 'Có lỗi xày ra, vui lòng thử lại',
      }
    );

    promise.then(() => {
      setValue({
        fullName: "",
        phone: "",
        email: "",
        typeService: "",
        content: "",
      });
    });

  };
  return (
    <section className={s.form_contact} id="form_section">
      <div className={s.wrap}>
        <div className="container">
          <div className={s.form}>
            <p className={s.info_form}>
              Đăng ký nhận thông tin nhận chính sách chiết khấu và hỗ trợ tốt
              nhất từ Chúng tôi
            </p>
            <ToastContainer />
            <form className={s.listInput} onSubmit={(e) => handleSubmit(e)}>
              <div className={s.itemInput}>
                <input
                  type="text"
                  placeholder="Họ và tên"
                  name="name"
                  value={value.fullName}
                  onChange={(e) =>
                    setValue((prev) => ({
                      ...prev,
                      fullName: e.target.value,
                    }))
                  }
                  className={s.input}
                  required
                />
              </div>
              <div className={s.itemInput}>
                <input
                  type="number"
                  placeholder="Số điện thoại"
                  name="phone"
                  value={value.phone}
                  onChange={(e) =>
                    setValue((prev) => ({
                      ...prev,
                      phone: e.target.value,
                    }))
                  }
                  className={s.input}
                  required
                />
              </div>
              <div className={s.itemInput}>
                <input
                  type="email"
                  placeholder="Email"
                  name="Email"
                  value={value.email}
                  onChange={(e) =>
                    setValue((prev) => ({
                      ...prev,
                      email: e.target.value,
                    }))
                  }
                  className={s.input}
                  required
                />
              </div>
              <div className={s.itemInput}>
                <input
                  type="text"
                  placeholder="Loại dịch vụ"
                  name="dichvu"
                  value={value.typeService}
                  onChange={(e) =>
                    setValue((prev) => ({
                      ...prev,
                      typeService: e.target.value,
                    }))
                  }
                  className={s.input}
                  required
                />
              </div>
              <div className={s.itemInput2}>
                <textarea
                  placeholder="..."
                  name="tinnhan"
                  value={value.content}
                  onChange={(e) =>
                    setValue((prev) => ({
                      ...prev,
                      content: e.target.value,
                    }))
                  }
                  className={s.inputarea}
                  required
                />
              </div>
              <div className={s.itemInput3}>
                <button className={s.btn} type="submit">
                  Đăng ký
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
