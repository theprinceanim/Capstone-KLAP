Schemas = {};
Schemas.updateProfile = new SimpleSchema({
    first_name: {
        type: String,
        label: "First Name",
    },
    last_name: {
        type: String,
        label: "Last Name"
    },
    country: {
        type: String,
        label: "Choose resident country",
        autoform: {
            type: "selectize",
            options: function() {
                return [
                {label: "USA", value: "USA"},
                {label: "UK", value: "UK"},
                {label: "Ghana", value: "Ghana"},
                {label: "Other", value: "Other"}
                ];
            }
        }
    },
    travel_route_from: {
        type: String,
        autoform: {
            type: "selectize",
            options: function() {
                return [
                {label: "Ghana", value: "Ghana"},
                {label: "UK", value: "UK"},
                {label: "USA", value: "USA"},

                ];
            }

        }
    },
    travel_route_to: {
        type: String,
        autoform: {
            type: "selectize",
            options: function() {
                return [
                {label: "Ghana", value: "Ghana"},
                {label: "UK", value: "UK"},
                {label: "USA", value: "USA"},

                ];
            }

        }
    },
    number_of_travels: {
        type: Number,
        label: "How many times do you travel on this route per year?"
    },
    available_as_carrier: {
        type: Boolean,
        label: "Do you want to receive package delivery requests?"
    },
    city: {
        type: String,
        label: "Choose resident city",
        autoform: {
            type: "selectize",
            options: function() {
                return [
                {label: "New York", value: "New York"},
                {label: "London", value: "London"},
                {label: "Accra", value: "Accra"},
                {label: "San Francisco", value: "San Francisco"},


                ];
            }
        }

    },
    month: {
        type: String,
        autoform: {
            type: "selectize",
            options: function() {
                return [

                {label: "Jan", value: "01"},
                {label: "Feb", value: "02"},
                {label: "Mar", value: "03"},
                {label: "Apr", value: "04"},
                {label: "May", value: "05"},
                {label: "Jun", value: "06"},
                {label: "Jul", value: "07"},
                {label: "Aug", value: "08"},
                {label: "Sep", value: "9"},
                {label: "Oct", value: "10"},
                {label: "Nov", value: "11"},
                {label: "Dec", value: "12"}
                ];
            }
        }
    },
    day: {
        type: String,
        autoform: {
         type: "selectize",
         options: function() {
            return [
            {label: "01", value: "01"},
            {label: "02", value: "02"},
            {label: "03", value: "03"},
            {label: "04", value: "04"},
            {label: "05", value: "05"},
            {label: "06", value: "06"},
            {label: "07", value: "07"},
            {label: "08", value: "08"},
            {label: "09", value: "09"},
            {label: "10", value: "10"},
            {label: "11", value: "11"},
            {label: "12", value: "12"},
            {label: "13", value: "13"},
            {label: "14", value: "14"},
            {label: "15", value: "15"},
            {label: "16", value: "16"},
            {label: "17", value: "17"},
            {label: "18", value: "18"},
            {label: "19", value: "19"},
            {label: "20", value: "20"},
            {label: "21", value: "21"},
            {label: "22", value: "22"},
            {label: "23", value: "23"},
            {label: "24", value: "24"},
            {label: "25", value: "25"},
            {label: "26", value: "26"},
            {label: "27", value: "27"},
            {label: "28", value: "28"},
            {label: "29", value: "29"},
            {label: "30", value: "30"},
            {label: "31", value: "31"},

            ];
        }
    }
},
year: {
    type: Number,
    autoform: {
     type: "selectize",
     options: function() {
        return [
        {label: "1935", value: 1935},
        {label: "1936", value: 1936},
        {label: "1937", value: 1937},
        {label: "1938", value: 1938},
        {label: "1939", value: 1939},
        {label: "1940", value: 1940},
        {label: "1941", value: 1941},
        {label: "1942", value: 1942},
        {label: "1943", value: 1943},
        {label: "1944", value: 1944},
        {label: "1945", value: 1945},
        {label: "1946", value: 1946},
        {label: "1947", value: 1947},
        {label: "1948", value: 1948},
        {label: "1949", value: 1949},
        {label: "1950", value: 1950},
        {label: "1951", value: 1951},
        {label: "1952", value: 1952},
        {label: "1953", value: 1953},
        {label: "1954", value: 1954},
        {label: "1955", value: 1955},
        {label: "1956", value: 1956},
        {label: "1957", value: 1957},
        {label: "1958", value: 1958},
        {label: "1959", value: 1959},
        {label: "1960", value: 1960},
        {label: "1961", value: 1961},
        {label: "1962", value: 1962},
        {label: "1963", value: 1963},
        {label: "1964", value: 1964},
        {label: "1965", value: 1965},
        {label: "1966", value: 1966},
        {label: "1967", value: 1967},
        {label: "1968", value: 1968},
        {label: "1969", value: 1969},
        {label: "1970", value: 1970},
        {label: "1971", value: 1971},
        {label: "1972", value: 1972},
        {label: "1973", value: 1973},
        {label: "1974", value: 1974},
        {label: "1975", value: 1975},
        {label: "1976", value: 1976},
        {label: "1977", value: 1977},
        {label: "1978", value: 1978},
        {label: "1979", value: 1979},
        {label: "1980", value: 1980},
        {label: "1981", value: 1981},
        {label: "1982", value: 1982},
        {label: "1983", value: 1983},
        {label: "1984", value: 1984},
        {label: "1985", value: 1985},
        {label: "1986", value: 1986},
        {label: "1987", value: 1987},
        {label: "1989", value: 1989},
        {label: "1990", value: 1990},
        {label: "1991", value: 1991},
        {label: "1992", value: 1992},
        {label: "1993", value: 1993},
        {label: "1994", value: 1994},
        {label: "1995", value: 1995},
        {label: "1996", value: 1996},
        {label: "1997", value: 1997},
        {label: "1998", value: 1998},
        {label: "1999", value: 1999},
        {label: "2000", value: 2000},
        {label: "2001", value: 2001},
        {label: "2002", value: 2002},
        {label: "2003", value: 2003},
        {label: "2005", value: 2005},
        {label: "2006", value: 2006},
        {label: "2007", value: 2007},
        {label: "2008", value: 2008},
        {label: "2009", value: 2009},
        {label: "2010", value: 2010},
        {label: "2011", value: 2011},
        {label: "2012", value: 2012},
        {label: "2013", value: 2013},
        {label: "2014", value: 2014},
        {label: "2015", value: 2015}




        ];
    }
}
}

});

// Meteor.users.attachSchema(Schema.updateProfile);