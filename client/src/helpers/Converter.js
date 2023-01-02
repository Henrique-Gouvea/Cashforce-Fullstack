export function formatDate(date) {
    return new Date(date).toLocaleDateString();
}

export function formatMoneyInPtBr(value) {
    return Number(value).toLocaleString("pt-br", {
        style: "currency",
        currency: "BRL",
    });
}