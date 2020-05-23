export default class MockTheatersInfoFetcher {

    filterOptions = {
        theaters: [
            {
                "id": 1,
                "companyName":"Multiplex",
            },
            {
                "id": 2,
                "companyName":"Планета кіно",
            },
            {
                "id": 3,
                "companyName":"Оскар",
            },
            {
                "id": 4,
                "companyName":"Батерфляй",
            }
        ],
        movies: [
            {
                id: 1,
                title: "Фільм 1"
            },
            {
                id: 2,
                title: "Фільм 2"
            },
            {
                id: 3,
                title: "Фільм 3"
            },
            {
                id: 4,
                title: "Фільм 4"
            },
            {
                id: 5,
                title: "Фільм 5"
            },
            {
                id: 6,
                title: "Фільм 6"
            },
            {
                id: 7,
                title: "Фільм 7"
            },
            {
                id: 8,
                title: "Фільм 8"
            },
        ]
    };

    selectedOptions = {
        theaters: [2, 3],
        movies: [1, 2, 5, 7],
        searchZone: "nearby"
    };

    fetchTheatersInfo(params) {
        let theaters = [], selectedFilters = {};
        if(params) {
            theaters = [
                {
                    coords: {
                        lat: 50.455390,
                        lng: 30.634826
                    },
                    siteUrl: "https://multiplex.ua/"
                },
                {
                    coords: {
                        lat: 50.445075,
                        lng: 30.520615
                    },
                    siteUrl: "https://planetakino.ua/"
                },
            ];
            selectedFilters = this.selectedOptions;
        }
        else {
            theaters = [
                {
                    coords: {
                        lat: 50.455390,
                        lng: 30.634826
                    },
                    siteUrl: "https://multiplex.ua/"
                },
                {
                    coords: {
                        lat: 50.453470,
                        lng: 30.598864
                    },
                    siteUrl: "https://oskar.kyiv.ua/"
                },
                {
                    coords: {
                        lat: 50.445075,
                        lng: 30.520615
                    },
                    siteUrl: "https://planetakino.ua/"
                },
            ];
            selectedFilters = {
                theaters: null,
                movies: null,
                searchZone: null
            };
        }
        const mapCenter = {
            lat: 50.45466,
            lng: 30.5238
        };
        const mapZoom = 12;

        return {
            filterOptions: this.filterOptions,
            selectedOptions: selectedFilters,
            suitableTheaters: theaters,
            mapCenter: mapCenter,
            mapZoom: mapZoom
        }
    }
}
