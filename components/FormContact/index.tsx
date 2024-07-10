import React from 'react'
import s from './style.module.css'
export default function FormContact() {
    return (
        <section className={s.form_contact} id="form_section">
            <div className={s.wrap}>
                <div className='container'>
                    <div className={s.form}>

                        <p className={s.info_form}>Đăng ký nhận thông tin nhận chính sách chiết khấu và hỗ trợ tốt nhất từ Chúng tôi</p>
                        <div className={s.listInput}>
                            <div className={s.itemInput}>
                                <input
                                    type="text"
                                    placeholder="Họ và tên"
                                    name="name"
                                    className={s.input}
                                    required
                                />
                            </div>
                            <div className={s.itemInput}>
                                <input
                                    type="number"
                                    placeholder="Số điện thoại"
                                    name="phone"
                                    className={s.input}
                                    required
                                />
                            </div>
                            <div className={s.itemInput}>
                                <input
                                    type="email"
                                    placeholder="Email"
                                    name="Email"
                                    className={s.input}
                                    required
                                />
                            </div>
                            <div className={s.itemInput}>
                                <input
                                    type="text"
                                    placeholder="Loại dịch vụ"
                                    name="dichvu"
                                    className={s.input}
                                    required
                                />
                            </div>
                            <div className={s.itemInput2}>
                                <textarea
                                    placeholder="..."
                                    name="tinnhan"
                                    className={s.inputarea}
                                    required
                                />
                            </div>
                            <div className={s.itemInput3}>
                                <button
                                    className={s.btn}
                                    type="submit"
                                >
                                    Đăng ký
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}
