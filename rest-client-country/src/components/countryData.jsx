const CountryData=({country})=>{
    return (
      <div className="country-details">
        <div>{country.name.common}</div>
        <img src={country.flags.png} alt="" style={{ width: 150 }} />
      </div>
    );


}

export default CountryData