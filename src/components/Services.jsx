import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import servicesData from './ServiceData';
import { useTranslation } from 'react-i18next';
import './Services.css';

const Services = () => {
  const { t } = useTranslation();
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOption, setSortOption] = useState('');
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [locationFilter, setLocationFilter] = useState('');
  const [filteredServices, setFilteredServices] = useState(servicesData);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSort = (event) => {
    setSortOption(event.target.value);
  };

  const handlePriceRange = (event) => {
    const range = event.target.value.split('-').map(Number);
    setPriceRange(range);
  };

  const handleLocationFilter = (event) => {
    setLocationFilter(event.target.value);
  };

  useEffect(() => {
    let services = servicesData;

    if (searchTerm) {
      services = services.filter(service =>
        service.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (locationFilter) {
      services = services.filter(service => service.location === locationFilter);
    }

    if (priceRange.length === 2) {
      services = services.filter(service =>
        service.price >= priceRange[0] && service.price <= priceRange[1]
      );
    }

    if (sortOption === 'priceAsc') {
      services.sort((a, b) => a.price - b.price);
    } else if (sortOption === 'priceDesc') {
      services.sort((a, b) => b.price - a.price);
    }

    setFilteredServices(services);
  }, [searchTerm, sortOption, priceRange, locationFilter]);

  return (
    <div>
      <h1>{t('Services')}</h1>
      <div className="filters">
        <input
          type="text"
          placeholder={t('Search services')}
          value={searchTerm}
          onChange={handleSearch}
        />
        <select value={sortOption} onChange={handleSort}>
          <option value="">{t('Sort by')}</option>
          <option value="priceAsc">{t('Price (Low to High)')}</option>
          <option value="priceDesc">{t('Price (High to Low)')}</option>
        </select>
        <select value={priceRange.join('-')} onChange={handlePriceRange}>
          <option value="0-1000">{t('All Prices')}</option>
          <option value="0-50">{t('$0 - $50')}</option>
          <option value="51-200">{t('$51 - $200')}</option>
          <option value="201-500">{t('$201 - $500')}</option>
        </select>
        <select value={locationFilter} onChange={handleLocationFilter}>
          <option value="">{t('All Locations')}</option>
          <option value="New York">{t('New York')}</option>
          <option value="Boston">{t('Boston')}</option>
          <option value="Miami">{t('Miami')}</option>
        </select>
      </div>
      <section className="services">
        {filteredServices.map(service => (
          <div className="each-service" key={service.id}>
            {service.originalPrice && <div className="sale-badge">{t('Sale')}</div>}
            {!service.available && <div className="unavailable-badge">{t('Unavailable')}</div>}
            <img src={service.image} alt={t(service.title)} className="service-image" />
            <div className="service-info">
              <Link to={`/services/${service.id}`}><h1>{t(service.title)}</h1></Link>
              <p className="location">{t(service.location)}</p>
              <p className="details">{t(service.details)}</p>
              <p className="score">{t('Rating')}: {service.score}</p>
            </div>
            <div className="statistics">
              {service.originalPrice && <div className="previous-price">{t('Previous Price')}: ${service.originalPrice}</div>}
              <div className="price">{t('Price')}: ${service.price}</div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

export default Services;
