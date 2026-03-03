body {
    margin: 0;
    padding: 0;
    font-family: Arial, sans-serif;
    background: linear-gradient(135deg, #0f2027, #203a43, #2c5364);
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

.container {
    background-color: #ffffff;
    padding: 30px;
    border-radius: 12px;
    width: 80%;
    max-width: 900px;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
    text-align: center;
}

h1 {
    color: #0f4c75;
}

h2 {
    color: #3282b8;
}

input {
    padding: 10px;
    width: 80%;
    margin-bottom: 20px;
    border-radius: 8px;
    border: 2px solid #3282b8;
    outline: none;
}

input:focus {
    border-color: #0f4c75;
}

.listas {
    display: flex;
    justify-content: space-between;
    gap: 20px;
}

ul {
    list-style: none;
    padding: 0;
}

li {
    background-color: #bbe1fa;
    margin: 5px 0;
    padding: 8px;
    border-radius: 6px;
    font-weight: bold;
    color: #0f4c75;
}
