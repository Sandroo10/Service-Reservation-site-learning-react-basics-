import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import servicesData from './ServiceData';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { useTranslation } from 'react-i18next';

const ServiceDetail = () => {
  const { t } = useTranslation();
  const { id } = useParams();
  const navigate = useNavigate();
  const service = servicesData.find(service => service.id === parseInt(id));

  if (!service) {
    return <div>{t('Service not found')}</div>;
  }

  const handleBooking = () => {
    if (service.available) {
      alert(t('You have booked this service!'));
      navigate('/');
    } else {
      alert(t('This service is currently unavailable.'));
    }
  };

  const downloadPDF = () => {
    const input = document.getElementById('service-detail');
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF();
      const imgProps= pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      pdf.save(`${service.title}.pdf`);
    });
  };

  return (
    <div id="service-detail" className="service-detail">
      <img src={service.image} alt={service.title} className="service-image" />
      <h1>{t(service.title)}</h1>
      <p>{t(service.details)}</p>
      <p className="location">{t('Location')}: {t(service.location)}</p>
      <p className="score">{t('Rating')}: {service.score}</p>
      <div className="statistics">
        {service.originalPrice && <div className="previous-price">${service.originalPrice}</div>}
        <div className="price">${service.price}</div>
      </div>
      <button onClick={handleBooking} className="book-button">{t('Book Now')}</button>
      <button onClick={downloadPDF} className="pdf-button">{t('Download PDF')}</button>
    </div>
  );
}

export default ServiceDetail;
