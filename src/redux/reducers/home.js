export default async function getReducer() {
    const data = await fetch('/assets/data/home.json').then(res => res.json());
    return (state = data) => state;
}
