import React from 'react';
import WeatherDetails from '../Components/Weather';

interface WeatherDetailPageProps {
    lat?: string | number;
    lon?: string | number;
}

const WeatherDetailPage: React.FC<WeatherDetailPageProps> = ({ lat, lon }) => {
    const latitude = typeof lat === 'string' ? parseFloat(lat) : lat || 0;
    const longitude = typeof lon === 'string' ? parseFloat(lon) : lon || 0;

    if (isNaN(latitude) || isNaN(longitude)) {
        return <div>Invalid latitude or longitude.</div>;
    }

    return (
        <div>
            <h1 className='text-center mb-5'>Weather Details</h1>
            <WeatherDetails lat={latitude} lon={longitude} />
        </div>
    );
};

export default WeatherDetailPage;









