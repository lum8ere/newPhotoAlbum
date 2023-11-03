import { Avatar, Card } from 'antd';

const { Meta } = Card;

export const ComponentCard = () => {

    const lastPic = {
        "albumId": 1,
        "id": 1,
        "title": "accusamus beatae ad facilis cum similique qui sunt",
        "url": "https://via.placeholder.com/600/92c952",
        "thumbnailUrl": "https://via.placeholder.com/150/92c952"
    }

    const album = {
        "userId": 1,
        "id": 1,
        "title": "quidem molestiae enim"
    }

    const user = {
        "id": 1,
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz",
        "address": {
            "street": "Kulas Light",
            "suite": "Apt. 556",
            "city": "Gwenborough",
            "zipcode": "92998-3874",
            "geo": {
                "lat": "-37.3159",
                "lng": "81.1496"
            }
        },
        "phone": "1-770-736-8031 x56442",
        "website": "hildegard.org",
        "company": {
            "name": "Romaguera-Crona",
            "catchPhrase": "Multi-layered client-server neural-net",
            "bs": "harness real-time e-markets"
        }
    }

    return (
        <Card
            style={{ width: 300 }}
            cover={
                <img
                    alt="example"
                    src={lastPic.url}
                />
            }
        >
            <Meta
                avatar={<Avatar
                >
                    {user && user.email
                        ? user.name[0].toUpperCase()
                        : null}
                </Avatar>}
                title={album.title}
            />
        </Card>
    )
}