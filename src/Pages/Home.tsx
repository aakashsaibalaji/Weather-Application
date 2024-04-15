import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Layout from '../Components/Layout';

interface City {
    geoname_id: string;
    name: string;
    ascii_name: string;
    label_en: string;
    timezone: string;
    population: string;
    lat: string; // Add latitude property
    lon: string; // Add longitude property
}

const Home: React.FC = () => {
    const [cities, setCities] = useState<City[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [page, setPage] = useState<number>(1);
    const observer = useRef<IntersectionObserver | null>(null);

    useEffect(() => {
        fetchCityData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        if (loading) {
            fetchCityData();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [loading]);

    useEffect(() => {
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 1.0,
        };

        const handleIntersection = (entries: IntersectionObserverEntry[]) => {
            const target = entries[0];
            if (target.isIntersecting) {
                setLoading(true);
            }
        };

        observer.current = new IntersectionObserver(handleIntersection, options);

        const intersectionObserverElement = document.getElementById('intersectionObserver') as HTMLElement;
        if (intersectionObserverElement && observer.current) {
            observer.current.observe(intersectionObserverElement);
        }

        return () => {
            if (observer.current) {
                observer.current.disconnect();
            }
        };
    }, []);

    const fetchCityData = async () => {
        try {
            const response = await axios.get(`https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/geonames-all-cities-with-a-population-1000/records?limit=20&page=${page}`);
            setCities(prevCities => [...prevCities, ...response.data.results]);
            setPage(prevPage => prevPage + 1);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching city data:', error);
        }
    };

    return (
        <Layout>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <div>
                    <table>
                        <thead>
                            <tr style={{ textAlign: 'left' }}>
                                <th>City Name</th>
                                <th>Country</th>
                                <th>Timezone</th>
                                <th>Population</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cities.map(city => (
                                <tr key={city.geoname_id}>
                                    <td>
                                        <Link
                                            to={`/weather/${city.name}?lat=${city.lat}&lon=${city.lon}`}
                                        >
                                            {city.name}
                                        </Link>
                                    </td>
                                    <td>{city.label_en}</td>
                                    <td>{city.timezone}</td>
                                    <td>{city.population}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    {loading && <div>Loading...</div>}
                    <div id="intersectionObserver"></div>
                </div>
            </div>
        </Layout>
    );
};

export default Home;



