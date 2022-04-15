class Ticket {
    constructor(destination, price, status) {
        this.destination = destination;
        this.price = price;
        this.status = status;
    }

    overview() {
        const ticketOverview = {
            destination: this.destination,
            price: this.price,
            status: this.status,
        }

        return (ticketOverview);
    }

    toString() {
        const output = `Ticket ${JSON.stringify(this.overview())}`;
        return output;
    }
};

function ticketCreate(ticketDescription, sortingCriterion) {
    const inputs = {
        empty: '',
        splitter: '|',
        sortingCriterion: {
            destination: 'destination',
            price: 'price',
            status: 'status',
        }
    }

    let destination = inputs.empty;
    let price = 0;
    let status = inputs.empty;
    let tickets = [];

    for (let description of ticketDescription) {
        description = description.split(inputs.splitter);

        destination = description[0];
        price = +description[1];
        status = description[2];

        const ticket = new Ticket(destination, price, status);

        tickets.push(ticket.overview());
    }
    
    switch (sortingCriterion) {
        case inputs.sortingCriterion.destination:
            tickets.sort((a, b) => a.destination - b.destination)
            break;
        case inputs.sortingCriterion.price:
            tickets.sort((a, b) => a.price - b.price)
            break;
        case inputs.sortingCriterion.status:
            tickets.sort((a, b) => a.status - b.status)
        default:
            break;
    }

    const ticketsOverview = function () {
        let output = [];

        tickets.forEach((ticket) => {
            output.push(JSON.stringify(ticket));
        })

        return output;
    };

    console.log(ticketsOverview());
};

ticketCreate(
    [
        'Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'
    ],
    'destination'
);
ticketCreate(
    [
        'Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'
    ],
    'status'
);