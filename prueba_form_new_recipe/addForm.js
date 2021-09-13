function addForm() {

    let form = document.getElementById("myForm");
    let input = document.createElement('div')
    input.setAttribute("class", "input-group mb-3")
    input.innerHTML = `
            <input type="text" value="" placeholder="ingredientes" class="form-control">
            <input type="text" value="" placeholder="cantidad" class="form-control">
    `
    form.append(input)

}