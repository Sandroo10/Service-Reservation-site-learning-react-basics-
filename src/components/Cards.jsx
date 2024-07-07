import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function Card(props) {
  const { t } = useTranslation();
  let badgeText;
  if (props.openSpots === 0) {
    badgeText = t('Unavailable');
  }

  return (
    <div className="card">
      {badgeText && <div className="card--badge">{badgeText}</div>}
      {props.originalPrice && <div className="card--badge">{t('Sale')}</div>}
      <Link to={`/services/${props.id}`}>
        <img
          src={`../images/${props.coverImg}`}
          className="card--image"
          alt="Service"
        />
      </Link>
      <div className="card--stats">
        <img src="../images/star.webp" className="card--star" alt="star" />
        <span>{props.stats.rating}</span>
        <span className="gray">({props.stats.reviewCount}) • </span>
        <span className="gray">{t(props.location)}</span>
      </div>
      <p className="card--title">{t(props.title)}</p>
      <p className="card--price">
        <span className="bold">{t('From')} ${props.price}</span> / {t('person')}
      </p>
    </div>
  );
}
