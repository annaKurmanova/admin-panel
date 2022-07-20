import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import api from 'axios';
import { format } from 'date-fns'



const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiVVNFUk5BTUUiLCJpYXQiOjE2NTc4MTQxNjYsImV4cCI6MTY1ODQxODk2Nn0.o5iUKek8nvnKsyskw41p8n6I5XEYkmokBWVJytKr7Wk';
const apiURL = 'http://135.181.35.61:2112/';

// send token with request
axios.interceptors.request.use(
  config => {
    config.headers.authorization = `Bearer ${token} `;
    return config;
  },
  error => {
    return Promise.reject(error);
  }
)


const Info = () => {
  const [image, setImage] = useState('');
  const fileInputRef = useRef();
  const [preview, setPreview] = useState('');


  const [blocks, setBlocks] = useState({
    name: "",
    contract: "",
    businessEntity: "",
    type: "",
  });

  const [details, setDetails] = useState({
    firstname: "",
    lastName: "",
    patronymic: "",
    phone: "",
    email: "",
  });



  useEffect(() => {
    // get company data
    const fetchData = async () => {
      try {
        const response = await api.get(`${apiURL}companies/12`);
        const contactResponse = await api.get(`${apiURL}contacts/16`)
        setBlocks(response.data);
        setDetails(contactResponse.data);
      } catch (err) {
        if (err.response) {
          //not in the 200 response range
          console.log(err.response.data);
          console.log(err.response.status);
          console.log(err.response.headers);
        } else {
          console.log(`Error: ${err.message}`);
        }
      }
    }
    fetchData();
  }, []);

  useEffect(() => {
    if (image) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      }
      reader.readAsDataURL(image);
    } else {
      setPreview(null);
    }
  }, [image])

  // update contact info
  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetails((prev) => {
      // search prev val and update
      return { ...prev, [name]: value }
    });
  }
  // update company info
  const handleCompanyChange = (e) => {
    const { name, value } = e.target;
    setBlocks((prev) => {
      // search prev val and update
      return { ...prev, [name]: value }
    });
  }
  // handle company submit
  const handleCompanySubmit = (e) => {
    e.preventDefault();

    const data = new FormData();

    data.append('firstname', blocks.name);
    data.append('lastname', blocks.contract);
    data.append('email', blocks.businessEntity);
    data.append('phone', blocks.type);

    axios({
      method: 'patch',
      url: `${apiURL}companies/12`,
      data: data,
      headers: { 'Content-Type': 'multipart/form-data' },
    })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (response) {
        console.log(response);
      });

    console.log(data)
  }

  // handle contact submit
  const handleSubmit = (e) => {
    e.preventDefault();

    const data = new FormData();

    data.append('firstname', details.firstname);
    data.append('lastname', details.lastname);
    data.append('email', details.email);
    data.append('phone', details.phone);

    axios({
      method: 'patch',
      url: `${apiURL}contacts/16`,
      data: data,
      headers: { 'Content-Type': 'multipart/form-data' },
    })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (response) {
        console.log(response);
      });

    console.log(data)
  }



  return (
    <>
      <div className="block__info">
        <div className="block__info-title">
          ОБЩАЯ ИНФОРМАЦИЯ
        </div>
        <form className="form" onSubmit={handleCompanySubmit}>
          <label htmlFor="full-business-name">
            Полное название:
            <input type="text" name="name" value={blocks.name} onChange={handleCompanyChange} />
          </label>
          <label htmlFor="contract">
            Договор:
            <input type="text" name="contract" value={`${blocks.contract.no} от ${new Date(blocks.contract.issue_date).toLocaleDateString('ru-RU')}`} onChange={handleCompanyChange} />
          </label>
          <label htmlFor="entity">
            Форма:
            <input type="text" name="businessEntity" value={blocks.businessEntity} onChange={handleCompanyChange} />
          </label>
          <label htmlFor="type">
            Тип:
            {/* <input type="text" name="type" value={`${blocks.type[0].charAt(0).toUpperCase() + blocks.type[0].slice(1)} , ${blocks.type[1].charAt(0).toUpperCase() + blocks.type[1].slice(1)}`} onChange={handleCompanyChange} /> */}
          </label>
          <input type="submit" value="Сохранить" />
        </form>
      </div>
      <div className="block__info">
        <div className="block__info-title">
          КОНТАКТНЫЕ ДАННЫЕ
        </div>
        <form className="form" onSubmit={handleSubmit}>
          <div className="name">
            <p>ФИО:</p>
            <label htmlFor="lastname">
              <input
                type="text"
                name="lastname"
                value={details.lastname}
                onChange={handleChange} />
            </label>
            <label htmlFor="firstname">
              <input
                type="text"
                name="firstname"
                value={details.firstname}
                onChange={handleChange} />
            </label>

            <label htmlFor="patronymic">
              <input
                type="text"
                name="patronymic"
                value={details.patronymic}
                onChange={handleChange} />
            </label>
          </div>
          <label htmlFor="phone">
            Телефон:
            <input type="text"
              value={details.phone}
              name="phone"
              onChange={handleChange} />
          </label>
          <label htmlFor="email">
            Эл. почта:
            <input type="text"
              value={details.email}
              name="email"
              onChange={handleChange} />
          </label>
          <input type="submit" value="Сохранить" />
        </form>
      </div>
      <div className="block__info">
        <div className="block__info-title">
          ПРИЛОЖЕННЫЕ ФОТО
        </div>
        <div className="images">
          <form>
            <div className="images__wrap">
              <div className="images__image">
                {image ? (
                  <div className="images__close" onClick={() => {
                    setImage(null)
                  }}><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="20" height="20" rx="10" fill="#D95151" />
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M5.20001 6.07224L9.12777 10L5.20001 13.9277L6.07226 14.8L10 10.8722L13.9278 14.8L14.8 13.9277L10.8723 10L14.8 6.07224L13.9278 5.2L10 9.12775L6.07226 5.2L5.20001 6.07224Z" fill="#F7F7F7" />
                    </svg>
                  </div>
                ) : null}
                {image ? (
                  <img
                    src={preview}
                  />
                ) : null}
              </div>
            </div>
            <button onClick={(event) => {
              event.preventDefault();
              fileInputRef.current.click();
            }}><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M1.89999 7.99999C1.89999 7.66862 2.16862 7.39999 2.49999 7.39999H13.5C13.8314 7.39999 14.1 7.66862 14.1 7.99999C14.1 8.33136 13.8314 8.59999 13.5 8.59999H2.49999C2.16862 8.59999 1.89999 8.33136 1.89999 7.99999Z" fill="#82B284" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M7.99999 1.89999C8.33136 1.89999 8.59999 2.16862 8.59999 2.49999V13.5C8.59999 13.8314 8.33136 14.1 7.99999 14.1C7.66862 14.1 7.39999 13.8314 7.39999 13.5V2.49999C7.39999 2.16862 7.66862 1.89999 7.99999 1.89999Z" fill="#82B284" />
              </svg>
              Добавить изображение</button>
            <input
              type="file"
              style={{ display: "none" }}
              ref={fileInputRef}
              accept="image/*"
              onChange={(event) => {
                const file = event.target.files[0];
                if (file) {
                  setImage(file);
                } else {
                  setImage(null);
                }
              }} />
          </form>

        </div>
      </div>
    </>


  )
}

export default Info