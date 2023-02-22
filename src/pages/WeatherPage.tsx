import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import SunriseSunset from "../components/SunriseSunset";
import { getIp } from "../store/actions/ip";
import { getSunriseSunset } from "../store/actions/sunrisesunset";
import { RootState } from "../store/types";

interface InputValue {
  ipAddress: string;
}

const WeatherPage = () => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState<InputValue>({ ipAddress: '' });
  const recs = useSelector((state: RootState) => state);
  const { data, error, loading } = recs.ip;
  const { ipAddress } = inputValue;

  /**
   * Handles changes to the email and password input fields.
   * @param e - The input change event.
   */
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputValue((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  /**
   * Handles the form submission.
   * @param e - The form submission event.
   */
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await dispatch<any>(getIp(inputValue.ipAddress));
  };

  useEffect(() => {
    if (data?.location?.latitude && data?.location?.longitude) {
      const { latitude, longitude } = data.location;
      dispatch<any>(getSunriseSunset(latitude, longitude));
    }
  }, [data, dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      <form className="row g-3" onSubmit={handleSubmit}>
        <div className="input-group py-3">
          <input
            type="text"
            id="ipAddress"
            className="form-control"
            placeholder={"IP Address"}
            name={"ipAddress"}
            value={ipAddress}
            onChange={handleChange}
          />
          <button type="submit" className="btn btn-primary btn-block">
            Search
          </button>
        </div>
        {error ? <div className="text-danger">IP Address Invalid</div> : null}
      </form>
      {data ? <h1 className="display-6 mb-3">Sunrise and sunset times in {data?.location?.city?.name}</h1> : null }
      {!error && data ? <SunriseSunset ipData={data} data={recs.sunsetsunrise.data}/> : null }
      <pre className="mt-5">
        <code>
          {data ? <div>Lat:  {data?.location?.latitude} </div> : null }
          {data ? <div>Long: {data?.location?.longitude}</div> : null }
        </code>
      </pre>
    </div>
  );
};

export default WeatherPage;
