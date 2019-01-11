export default async function getReducer() {
    const data = await fetch('/assets/data/home.json').then(res => res.json());
    data.icons = data.icons || { unknown: '' };
    return (state = data) => state;
}
