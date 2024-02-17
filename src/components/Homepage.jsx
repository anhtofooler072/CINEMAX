import React from 'react'
import './Styles.css'

export default function Homepage() {
    /**============================================
     *               DECLARE SECTION
     *=============================================**/

    const [seat, setSeat] = React.useState([
        {
            "hang": "",
            "danhSachGhe": [
                { "soGhe": "1", "gia": 0 },
                { "soGhe": "2", "gia": 0 },
                { "soGhe": "3", "gia": 0 },
                { "soGhe": "4", "gia": 0 },
                { "soGhe": "5", "gia": 0 },
                { "soGhe": "6", "gia": 0 },
                { "soGhe": "7", "gia": 0 },
                { "soGhe": "8", "gia": 0 },
                { "soGhe": "9", "gia": 0 },
                { "soGhe": "10", "gia": 0 },
                { "soGhe": "11", "gia": 0 },
                { "soGhe": "12", "gia": 0 }
            ]
        }
        ,
        {
            "hang": "A",
            "danhSachGhe": [
                { "soGhe": "A1", "gia": 75000, "daDat": false },
                { "soGhe": "A2", "gia": 75000, "daDat": false },
                { "soGhe": "A3", "gia": 75000, "daDat": false },
                { "soGhe": "A4", "gia": 75000, "daDat": false },
                { "soGhe": "A5", "gia": 75000, "daDat": false },
                { "soGhe": "A6", "gia": 75000, "daDat": false },
                { "soGhe": "A7", "gia": 75000, "daDat": false },
                { "soGhe": "A8", "gia": 75000, "daDat": false },
                { "soGhe": "A9", "gia": 75000, "daDat": false },
                { "soGhe": "A10", "gia": 75000, "daDat": false },
                { "soGhe": "A11", "gia": 0, "daDat": true },
                { "soGhe": "A12", "gia": 0, "daDat": true }
            ]
        },
        {
            "hang": "B",
            "danhSachGhe": [
                { "soGhe": "B1", "gia": 75000, "daDat": false },
                { "soGhe": "B2", "gia": 75000, "daDat": false },
                { "soGhe": "B3", "gia": 75000, "daDat": false },
                { "soGhe": "B4", "gia": 75000, "daDat": false },
                { "soGhe": "B5", "gia": 75000, "daDat": false },
                { "soGhe": "B6", "gia": 75000, "daDat": false },
                { "soGhe": "B7", "gia": 75000, "daDat": false },
                { "soGhe": "B8", "gia": 75000, "daDat": false },
                { "soGhe": "B9", "gia": 75000, "daDat": false },
                { "soGhe": "B10", "gia": 75000, "daDat": false },
                { "soGhe": "B11", "gia": 75000, "daDat": false },
                { "soGhe": "B12", "gia": 75000, "daDat": false }
            ]
        },
        {
            "hang": "C",
            "danhSachGhe": [
                { "soGhe": "C1", "gia": 75000, "daDat": false },
                { "soGhe": "C2", "gia": 75000, "daDat": false },
                { "soGhe": "C3", "gia": 75000, "daDat": false },
                { "soGhe": "C4", "gia": 75000, "daDat": false },
                { "soGhe": "C5", "gia": 75000, "daDat": false },
                { "soGhe": "C6", "gia": 75000, "daDat": false },
                { "soGhe": "C7", "gia": 75000, "daDat": false },
                { "soGhe": "C8", "gia": 75000, "daDat": false },
                { "soGhe": "C9", "gia": 75000, "daDat": false },
                { "soGhe": "C10", "gia": 75000, "daDat": false },
                { "soGhe": "C11", "gia": 75000, "daDat": false },
                { "soGhe": "C12", "gia": 75000, "daDat": false }
            ]
        }, {
            "hang": "D",
            "danhSachGhe": [
                { "soGhe": "D1", "gia": 75000, "daDat": false },
                { "soGhe": "D2", "gia": 75000, "daDat": false },
                { "soGhe": "D3", "gia": 75000, "daDat": false },
                { "soGhe": "D4", "gia": 75000, "daDat": false },
                { "soGhe": "D5", "gia": 75000, "daDat": false },
                { "soGhe": "D6", "gia": 75000, "daDat": false },
                { "soGhe": "D7", "gia": 75000, "daDat": false },
                { "soGhe": "D8", "gia": 75000, "daDat": false },
                { "soGhe": "D9", "gia": 75000, "daDat": false },
                { "soGhe": "D10", "gia": 75000, "daDat": false },
                { "soGhe": "D11", "gia": 75000, "daDat": false },
                { "soGhe": "D12", "gia": 75000, "daDat": false }
            ]
        }, {
            "hang": "E",
            "danhSachGhe": [
                { "soGhe": "E1", "gia": 75000, "daDat": false },
                { "soGhe": "E2", "gia": 75000, "daDat": false },
                { "soGhe": "E3", "gia": 75000, "daDat": false },
                { "soGhe": "E4", "gia": 75000, "daDat": false },
                { "soGhe": "E5", "gia": 75000, "daDat": false },
                { "soGhe": "E6", "gia": 75000, "daDat": false },
                { "soGhe": "E7", "gia": 75000, "daDat": false },
                { "soGhe": "E8", "gia": 75000, "daDat": false },
                { "soGhe": "E9", "gia": 75000, "daDat": false },
                { "soGhe": "E10", "gia": 75000, "daDat": false },
                { "soGhe": "E11", "gia": 75000, "daDat": false },
                { "soGhe": "E12", "gia": 75000, "daDat": false }
            ]
        }, {
            "hang": "F",
            "danhSachGhe": [
                { "soGhe": "F1", "gia": 75000, "daDat": false },
                { "soGhe": "F2", "gia": 75000, "daDat": false },
                { "soGhe": "F3", "gia": 75000, "daDat": false },
                { "soGhe": "F4", "gia": 75000, "daDat": false },
                { "soGhe": "F5", "gia": 75000, "daDat": false },
                { "soGhe": "F6", "gia": 75000, "daDat": false },
                { "soGhe": "F7", "gia": 75000, "daDat": false },
                { "soGhe": "F8", "gia": 75000, "daDat": false },
                { "soGhe": "F9", "gia": 75000, "daDat": false },
                { "soGhe": "F10", "gia": 75000, "daDat": false },
                { "soGhe": "F11", "gia": 75000, "daDat": false },
                { "soGhe": "F12", "gia": 75000, "daDat": false }
            ]
        }, {
            "hang": "G",
            "danhSachGhe": [
                { "soGhe": "G1", "gia": 75000, "daDat": false },
                { "soGhe": "G2", "gia": 75000, "daDat": false },
                { "soGhe": "G3", "gia": 75000, "daDat": false },
                { "soGhe": "G4", "gia": 75000, "daDat": false },
                { "soGhe": "G5", "gia": 75000, "daDat": false },
                { "soGhe": "G6", "gia": 75000, "daDat": false },
                { "soGhe": "G7", "gia": 75000, "daDat": false },
                { "soGhe": "G8", "gia": 75000, "daDat": false },
                { "soGhe": "G9", "gia": 75000, "daDat": false },
                { "soGhe": "G10", "gia": 75000, "daDat": false },
                { "soGhe": "G11", "gia": 75000, "daDat": false },
                { "soGhe": "G12", "gia": 75000, "daDat": false }
            ]
        }, {
            "hang": "H",
            "danhSachGhe": [
                { "soGhe": "H1", "gia": 75000, "daDat": false },
                { "soGhe": "H2", "gia": 75000, "daDat": false },
                { "soGhe": "H3", "gia": 75000, "daDat": false },
                { "soGhe": "H4", "gia": 75000, "daDat": false },
                { "soGhe": "H5", "gia": 75000, "daDat": false },
                { "soGhe": "H6", "gia": 75000, "daDat": false },
                { "soGhe": "H7", "gia": 75000, "daDat": false },
                { "soGhe": "H8", "gia": 75000, "daDat": false },
                { "soGhe": "H9", "gia": 75000, "daDat": false },
                { "soGhe": "H10", "gia": 75000, "daDat": false },
                { "soGhe": "H11", "gia": 75000, "daDat": false },
                { "soGhe": "H12", "gia": 75000, "daDat": false }
            ]
        }, {
            "hang": "I",
            "danhSachGhe": [
                { "soGhe": "I1", "gia": 75000, "daDat": false },
                { "soGhe": "I2", "gia": 75000, "daDat": false },
                { "soGhe": "I3", "gia": 75000, "daDat": false },
                { "soGhe": "I4", "gia": 75000, "daDat": false },
                { "soGhe": "I5", "gia": 75000, "daDat": false },
                { "soGhe": "I6", "gia": 75000, "daDat": false },
                { "soGhe": "I7", "gia": 75000, "daDat": false },
                { "soGhe": "I8", "gia": 75000, "daDat": false },
                { "soGhe": "I9", "gia": 75000, "daDat": false },
                { "soGhe": "I10", "gia": 75000, "daDat": false },
                { "soGhe": "I11", "gia": 75000, "daDat": false },
                { "soGhe": "I12", "gia": 75000, "daDat": false }
            ]
        }, {
            "hang": "J",
            "danhSachGhe": [
                { "soGhe": "J1", "gia": 75000, "daDat": false },
                { "soGhe": "J2", "gia": 75000, "daDat": false },
                { "soGhe": "J3", "gia": 75000, "daDat": false },
                { "soGhe": "J4", "gia": 75000, "daDat": false },
                { "soGhe": "J5", "gia": 75000, "daDat": false },
                { "soGhe": "J6", "gia": 75000, "daDat": false },
                { "soGhe": "J7", "gia": 75000, "daDat": false },
                { "soGhe": "J8", "gia": 75000, "daDat": false },
                { "soGhe": "J9", "gia": 75000, "daDat": false },
                { "soGhe": "J10", "gia": 75000, "daDat": false },
                { "soGhe": "J11", "gia": 75000, "daDat": false },
                { "soGhe": "J12", "gia": 75000, "daDat": false }
            ]
        }

    ])
    const [selectedSeat, setSelectedSeat] = React.useState([])
    const [totalPrice, setTotalPrice] = React.useState(0)
    const [pname, setPname] = React.useState("")
    const [phonenumber, setPhonenumber] = React.useState("")
    const [email, setEmail] = React.useState("")
    const [date, setDate] = React.useState("")
    /*========================================== END OF SECTION ==========================================*/


    /**============================================
     *               SECTION FUNCTION
     *=============================================**/

    const seatSelect = (e, gia) => {
        let seat = e.target.textContent;
        let seatPrice = gia;
        let seatSelected = {
            "soGhe": seat,
            "gia": seatPrice,
            "daDat": true
        }
        if (e.target.style.backgroundColor === 'green') {
            e.target.style.backgroundColor = 'yellow';
            setTotalPrice(totalPrice + seatPrice)
            setSelectedSeat([...selectedSeat, seatSelected])
        } else if (e.target.style.backgroundColor === 'yellow') {
            e.target.style.backgroundColor = 'green';
            setTotalPrice(totalPrice - seatPrice)
            setSelectedSeat(selectedSeat.filter((item) => { return item.soGhe !== seat }))
            return;
        } else {
            return;
        }
    }
    const seatDelete = (e, seatPrice) => {
        let seat = e.target.previousSibling.previousSibling.textContent;
        setTotalPrice(totalPrice - seatPrice)
        setSelectedSeat(selectedSeat.filter((item) => { return item.soGhe !== seat }))
        document.querySelectorAll('.seatRow button').forEach((item) => {
            if (item.textContent === seat) {
                item.style.backgroundColor = 'green';
            }
        })
    }
    const handleName = (e) => {
        setPname(e.target.value)
    }
    const handlePhonenumber = (e) => {
        setPhonenumber(e.target.value)
    }
    const handleMail = (e) => {
        setEmail(e.target.value)
    }
    const handleDate = (e) => {
        setDate(e.target.value)
    }
    const seatSubmit = () => {
        alert(`Tên: ${pname} \nSố điện thoại: ${phonenumber} \nEmail: ${email} \nNgày giờ: ${date}`)
        alert(`Ghế đã chọn: ${selectedSeat.map((item) => { return item.soGhe })} \nTổng tiền: ${Number(totalPrice).toLocaleString()}`)
        let cloneSeat = [...seat]
        cloneSeat.forEach((item) => {
            item.danhSachGhe.forEach((item) => {
                selectedSeat.forEach((item2) => {
                    if (item.soGhe === item2.soGhe) {
                        item.daDat = true
                    }
                })
            })
        })
        setSeat(cloneSeat)
        console.log(seat)
        setTotalPrice(0)
        setSelectedSeat([])
        setPname("")
        setPhonenumber("")
        setEmail("")
        setDate("")
    }
    /*========================================== END OF SECTION ==========================================*/


    /**============================================
     *               RENDER SEAT
     *=============================================**/
    const renderSeat = seat.map((item, index) => {
        if (item.hang === "") {
            return (
                <div key={index} className='seatRow'>
                    <h3></h3>
                    <div className='seatRow-btn'>
                        {item.danhSachGhe.map((item, index) => {
                            return (
                                <button className='seatBtn' key={index} style={{ borderRadius: '100%', backgroundColor: 'white' }}>{item.soGhe}</button>
                            )
                        })}
                    </div>
                </div>
            )
        }
        return (
            <div key={index} className='seatRow'>
                <span>{item.hang}</span>
                <div className='seatRow-btn'>
                    {item.danhSachGhe.map((item, index) => {
                        return (
                            <button className='seatBtn' key={index} style={{ backgroundColor: item.daDat ? 'red' : 'green' }} onClick={(e) => { seatSelect(e, item.gia) }}>{item.soGhe}</button>
                        )
                    })}
                </div>
            </div>
        )
    })
    const renderSelectedSeat = selectedSeat.map((item, index) => {
        return (
            <div key={index} className='selectedSeatItem'>
                <span>{item.soGhe}</span>
                <p>{Number(item.gia).toLocaleString()}</p>
                <button className='btn btn-danger' onClick={(e) => { seatDelete(e, item.gia) }}>delete</button>
            </div>
        )
    })
    /*========================================== END OF SECTION ==========================================*/


    return (
        <div className='cineBody'>
            <div className="cineContainer">
            <div className="seatContainer">
                {renderSeat}
            </div>
            <div className="selectedSeat">
                {renderSelectedSeat}
                <div className="totalPrice">
                    <p>Tổng tiền: {Number(totalPrice).toLocaleString()}</p>
                </div>
                <div>
                    {/* Modal trigger button */}
                    <button type="button" className="btn btn-primary btn-lg" data-bs-toggle="modal" data-bs-target="#modalId">
                        Đặt ghế
                    </button>
                </div>
            </div>
                    {/* Modal Body */}
                    {/* if you want to close by clicking outside the modal, delete the last endpoint:data-bs-backdrop and data-bs-keyboard */}
                    <div className="modal fade" id="modalId" tabIndex={-1} data-bs-backdrop="static" data-bs-keyboard="false" role="dialog" aria-labelledby="modalTitleId" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-scrollable modal-dialog-top modal-sm" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="modalTitleId">
                                        <span>Thông tin đặt ghế</span>
                                    </h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                                </div>
                                <div className="modal-body ">
                                    <label htmlFor="name">
                                        <p>Họ tên: </p>
                                        <input type="text" name="name" id="name" value={pname} onChange={handleName} />
                                    </label>
                                    <label htmlFor="phonenumber">
                                        <p>Số điện thoại: </p>
                                        <input type="text" name="phonenumber" id="phonenumber" value={phonenumber} onChange={handlePhonenumber} />
                                    </label>
                                    <label htmlFor="email">
                                        <p>Email: </p>
                                        <input type="email" name="email" id="email" value={email} onChange={handleMail} />
                                    </label>
                                    <label htmlFor="date">
                                        <p>Khung giờ: </p>
                                        <input type="datetime-local" name="date" id="date" value={date} onChange={handleDate} />
                                    </label>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                                        Close
                                    </button>
                                    <button type="button" className="btn btn-primary" onClick={seatSubmit}>Save</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Optional: Place to the bottom of scripts */}
            </div>
        </div>
    )
}
