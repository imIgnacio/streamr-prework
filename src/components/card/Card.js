function Card(props) {

    const styles = {
        div: {
            display: 'flex',
            width: '240px',
            height: '240px',
            border: '2px solid black',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '20px'
        },
        img: {
            width: '100px',
            height: '100px',
            marginBottom: '20px'
        },
        h2: {
            margin: '0',
            padding: '0'
        },
        p: {
            margin: '0',
            padding: '0'
        }
    }

    return <div style={styles.div}>
        <img style={styles.img} src={props.image} alt="Product" />
        <h2 style={styles.h2}>{props.name}</h2>
        <p style={styles.p}>{props.owner}</p>
    </div>
}

export default Card;