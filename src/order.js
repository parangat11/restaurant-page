export const stuff = `
<form action="post">
    <p>
        <label for="name">Name:</label><input type="text" id="name">
    </p>
    <p>
        <label for="mail">Covenant:</label><input type="email" id="mail">
    </p>
    <p>
        <label for="msg">Message:</label>
        <textarea id="msg" name="user_message"></textarea>
    </p>
    <p>
        <button type="button" class="btn-77" id="order-btn">Order Items</button>
    </p>
    </form>
`;

const order = document.createElement('div');
order.innerHTML = stuff;
export {order};