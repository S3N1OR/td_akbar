let itemCount = 6;
const container = document.querySelector('.container');

function createItem(){
	for (let i = 0; i < itemCount; i++) {
  		container.innerHTML = container.innerHTML + `
  			<div id="item-${i}" class="item">
				<div class="block">
					<h2 class="title">Кол-во штук</h2>
					<input name="count-all-pcs-${i}" data-persist="garlic" type="number" id="count-all-pcs-${i}" oninput="result(${i})">
				</div>

				<div class="block">
					<h2 class="title">Кол-во штук в уп.</h2>
					<input name="count-box-pcs-${i}" data-persist="garlic" type="number" id="count-box-pcs-${i}" oninput="result(${i})" value="12">
				</div> 

				<div class="block">
					<h2 class="title">Кол-во уп. на паллете.</h2>
					<input name="count-pallet-box-${i}" data-persist="garlic" type="number" id="count-pallet-box-${i}" oninput="result(${i})" value="65">
				</div>

				<div id="result-${i}" class="result">
					Упаковок: 0 и 0 шт.<br>Паллет: 0
				</div>
			</div>
  		`
	};
}

window.addEventListener('load', () => {
	createItem();
	result();
});

function result(itemCount){
	let count_all_pcs = document.getElementById(`count-all-pcs-${itemCount}`);
	let count_box_pcs = document.getElementById(`count-box-pcs-${itemCount}`);
	let count_pallet_box = document.getElementById(`count-pallet-box-${itemCount}`);

	const result = document.querySelector(`#result-${itemCount}`);

	let resultBox = Math.floor(count_all_pcs.value / count_box_pcs.value);
	let resultPallet = Math.floor(resultBox / count_pallet_box.value);

	result.innerHTML = `Упаковок: ${resultBox} и ${count_all_pcs.value - (resultBox * count_box_pcs.value)} шт.<br>Паллет: ${resultPallet}`;
}