import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class GooglemapService {

    async autoComplete(input: string):  Promise<any>{

        const options = {
            url: 'https://google-map-places.p.rapidapi.com/maps/api/place/queryautocomplete/json',
            params: {
                input: input,
                radius: '1000',
                language: 'en',
                location: '40,-110',
                offset: '3'
            },
            headers: {
                'x-rapidapi-key': '8b04cab07amsh315133622000192p182a60jsne985a57d3ee2',
                'x-rapidapi-host': 'google-map-places.p.rapidapi.com'
            }
            };

            try {
                const response = await axios.request(options);
                console.log(response.data);
            } catch (error) {
                console.error(error);
            }
    }

    async textSearch(query: string):  Promise<any>{

        const options = {
            url: 'https://google-map-places.p.rapidapi.com/maps/api/place/textsearch/json',
            params: {
                query: query,
                radius: '1000',
                opennow: 'true',
                location: '40,-110',
                language: 'en',
                region: 'en'
            },
            headers: {
                'x-rapidapi-key': '8b04cab07amsh315133622000192p182a60jsne985a57d3ee2',
                'x-rapidapi-host': 'google-map-places.p.rapidapi.com'
            }
            };

            try {
                const response = await axios.request(options);
                return response.data;
            } catch (error) {
                console.error(error);
            }
    }
}
