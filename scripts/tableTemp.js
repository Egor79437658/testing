
function loadData() {
    // Эмуляция запроса к серверу
    const mockData = [
        { isChosen: false, name: "Товар 1", quantity: 10, price: 100 },
        { isChosen: false, name: "Товар 2", quantity: 5, price: 200 },
        { isChosen: false, name: "Товар 3", quantity: 8, price: 150 },
        { isChosen: false, name: "Товар 4", quantity: 10, price: 100 },
        { isChosen: false, name: "Товар 5", quantity: 5, price: 200 },
    ];
    return mockData;
}




let gridApi;

document.addEventListener('DOMContentLoaded', function() {
    //gridApi.setGridOption("cellSelection", true);  //включить функкцию
    // gridApi.setGridOption("onRowDoubleClicked", event => { //выделение по дв щелчк
    //   if (event.node.isSelected()){
    //   event.node.setSelected(false);
    // } else {event.node.setSelected(true);}
    // } );
    

  });

const undo = document.getElementById("undoBtn") ;

undo.addEventListener("click", (e) => {
    gridApi.undoCellEditing();
})

const redo = document.getElementById("redoBtn") ;

redo.addEventListener("click", (e) => {
    gridApi.redoCellEditing();
})


class ActionsButtons {
    init(params) {
        this.params = params;
        this.eGui = document.createElement("div");
        this.eGui.style.display = "flex";
        this.eGui.style.gap = "5px";
        this.eGui.style.justifyContent = "center";
       
        this.insertButton = document.createElement("button");
        this.insertButton.textContent = 'Вставить строки';
        this.insertButton.classList.add('ag-grid-insert-button');
        this.insertButton.addEventListener('click', (e) => this.onInsert(e));
       
        this.deleteButton = document.createElement("button");
        this.deleteButton.textContent = 'Удалить';
        this.deleteButton.classList.add('ag-grid-delete-button');
        this.deleteButton.addEventListener('click', (e) => this.onDelete(e));
       
        this.eGui.appendChild(this.insertButton);
        this.eGui.appendChild(this.deleteButton);
    }




    onInsert(event) {
        event.stopPropagation();
        const api = this.params.api;
        const clickedNode = this.params.node;
        const selectedNodes = api.getSelectedNodes();
       
        // Определяем, куда вставлять
        const isBulkInsert = selectedNodes.length > 0 &&
                           selectedNodes.some(node => node.id === clickedNode.id);
        const nodesForInsert = isBulkInsert ? selectedNodes : [clickedNode];
       
        const defaultCount = 1;
        const question = isBulkInsert
            ? "Сколько пустых строк вставить под каждую выбранную?"
            : "Сколько пустых строк вставить?";
       
        const input = prompt(question, defaultCount);
        const count = parseInt(input) || defaultCount;
        if (count <= 0) return;
       
        // Получаем все данные
        const allData = [];
        api.forEachNode(node => allData.push(node.data));
       
        // Подготавливаем вставку
        const inserts = [];
        if (nodesForInsert.length > 0) {
            // Вставка под выбранные строки
            nodesForInsert.forEach(node => {
                const rowIndex = allData.findIndex(row => row === node.data);
                if (rowIndex !== -1) {
                    inserts.push({
                        index: rowIndex + 1,
                        rows: Array(count).fill().map(() => ({
                            isChosen: false,
                            name: "",
                            quantity: 0,
                            price: 0
                        }))
                    });
                }
            });
        } else {
            // Вставка в конец таблицы
            inserts.push({
                index: allData.length,
                rows: Array(count).fill().map(() => ({
                    isChosen: false,
                    name: "",
                    quantity: 0,
                    price: 0
                }))
            });
        }
       
        // Сортировка и применение
        inserts.sort((a, b) => b.index - a.index);
        inserts.forEach(insert => {
            allData.splice(insert.index, 0, ...insert.rows);
        });
       
        api.setGridOption('rowData', allData);
        if (isBulkInsert) api.deselectAll();
    }




    onDelete(event) {
        event.stopPropagation();
        const api = this.params.api;
        const clickedNode = this.params.node;
        const selectedNodes = api.getSelectedNodes();
       
        const isBulkDelete = selectedNodes.length > 0 &&
                            selectedNodes.includes(clickedNode);
       
        const nodesToRemove = isBulkDelete ? selectedNodes : [clickedNode];
       
        if (!confirm(`Удалить ${nodesToRemove.length} строк(у)?`)) return;
       
        api.applyTransaction({
            remove: nodesToRemove.map(node => node.data)
        });
       
        api.deselectAll();
    }




    getGui() {
        return this.eGui;
    }




    destroy() {
        this.insertButton?.removeEventListener('click', this.onInsert);
        this.deleteButton?.removeEventListener('click', this.onDelete);
    }
}




const gridOptions = {
    rowData: loadData(),
    columnDefs: [
        {
            field: "isChosen",
            headerName: "",
            width: 50,
            rowDrag: true,
            //cellClass: 'ag-selection-checkbox',
            // cellClassRules: {
            //     // This will apply the row-selected class to the entire row when checkbox is checked
            //     'ag-row-selected': params => params.data.isChosen
            // },
            // onCellValueChanged: params => {
            //     // Refresh the row to apply the class changes
            //     params.api.refreshCells({
            //         rowNodes: [params.node],
            //         force: true
            //     });
            // }
        },
        {
            field: "name",
            headerName: "Название",
        },
        {
            field: "quantity",
            headerName: "Количество",
        },
        {
            field: "price",
            headerName: "Цена",
        },
    ],
    defaultColDef: {
        flex: 1,
        editable: true,
        sortable: true,
        filter: true,
        enableCellChangeFlash: true
    },
    enableRangeSelection: true,
    cellSelection: true,
    enableRangeHandle: true,
    suppressMultiRangeSelection: false,
    rowDragManaged: true,
    animateRows: true,
    rowSelection: 'multiple',
    suppressRowClickSelection: true,
    undoRedoCellEditing: true,
    onSelectionChanged: onSelectionChanged,
    enableCellTextSelection: false,
    suppressClipboardPaste: false,

    onRowDoubleClicked: event => { //выделение по дв щелчк
        if (event.node.isSelected()){
        event.node.setSelected(false);
      } else {event.node.setSelected(true);}
      },

    // onCellEditingStopped: (event) => {
    //     // Handle checkbox changes
    //     if (event.colDef.field === 'isChosen') {
    //         event.api.refreshCells({
    //             rowNodes: [event.node],
    //             force: true
    //         });
    //     }
    // }
};




function onSelectionChanged() {
    const selectedCount = gridApi.getSelectedNodes().length;
    const saveBtn = document.getElementById('saveSelectedBtn');
    saveBtn.disabled = selectedCount === 0;
    document.getElementById('selectedCount').textContent = selectedCount;
}




function setupSaveButtons() {
    // Сохранение выделенного
    document.getElementById('saveSelectedBtn').addEventListener('click', () => {
        const selectedData = gridApi.getSelectedNodes().map(node => node.data);
        if (selectedData.length === 0) {
            showNotification('Нет выбранных строк!', 'error');
            return;
        }
        console.log('Saving selected:', selectedData);
        showNotification(`Сохранено ${selectedData.length} выбранных строк`);
    });




    // Сохранение всей таблицы
    document.getElementById('saveAllBtn').addEventListener('click', () => {
        const allData = [];
        gridApi.forEachNode(node => allData.push(node.data));
        console.log('Saving all:', allData);
        showNotification(`Сохранено ${allData.length} строк (вся таблица)`);
    });




    // Вставка строк (обновлённая версия)
    document.getElementById('insertRowsBtn').addEventListener('click', (e) => {
       //alert("sdsd");
        if (e.processed) return; // Если событие уже обработано
        e.processed = true;
        const selectedNodes = gridApi.getSelectedNodes();
        const defaultCount = 0;
       
        const question = selectedNodes.length > 0
            ? "Сколько пустых строк вставить под каждую выбранную?"
            : "Сколько пустых строк добавить в конец таблицы?";
       
        const input = prompt(question, defaultCount);
        const count = parseInt(input) || defaultCount;
        if (count <= 0) return;
       
        const allData = [];
        gridApi.forEachNode(node => allData.push(node.data));
       
        const inserts = [];
        if (selectedNodes.length > 0) {
            // Вставка под выделенные строки
            selectedNodes.forEach(node => {
                const rowIndex = allData.findIndex(row => row === node.data);
                if (rowIndex !== -1) {
                    inserts.push({
                        index: rowIndex + 1,
                        rows: Array(count).fill().map(() => ({
                            isChosen: false,
                            name: "",
                            quantity: 0,
                            price: 0
                        }))
                    });
                }
            });
        } else {
            // Вставка в конец
            inserts.push({
                index: allData.length,
                rows: Array(count).fill().map(() => ({
                    isChosen: false,
                    name: "",
                    quantity: 0,
                    price: 0
                }))
            });
        }
       
        inserts.sort((a, b) => b.index - a.index);
        inserts.forEach(insert => {
            allData.splice(insert.index, 0, ...insert.rows);
        });
       
        gridApi.setGridOption('rowData', allData);
        if (selectedNodes.length > 0) gridApi.deselectAll();
    });




    // Удаление строк
    document.getElementById('deleteRowsBtn').addEventListener('click', () => {
        const selectedNodes = gridApi.getSelectedNodes();
        if (selectedNodes.length === 0) {
            showNotification('Нет выделенных строк для удаления!', 'error');
            return;
        }
       
        if (!confirm(`Удалить ${selectedNodes.length} строк(у)?`)) return;
       
        gridApi.applyTransaction({
            remove: selectedNodes.map(node => node.data)
        });
       
        gridApi.deselectAll();
    });
}




document.addEventListener('DOMContentLoaded', () => {
    gridApi = agGrid.createGrid(document.querySelector("#myGrid"), gridOptions);
    setupSaveButtons();
});




function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.style.position = 'fixed';
    notification.style.bottom = '20px';
    notification.style.right = '20px';
    notification.style.padding = '10px 20px';
    notification.style.background = type === 'success' ? '#4CAF50' : '#f44336';
    notification.style.color = 'white';
    notification.style.borderRadius = '4px';
    notification.style.zIndex = '1000';
    notification.style.boxShadow = '0 2px 5px rgba(0,0,0,0.2)';
    notification.textContent = message;
   
    const existing = document.querySelector('.ag-grid-notification');
    if (existing) existing.remove();
   
    notification.classList.add('ag-grid-notification');
    document.body.appendChild(notification);
   
    setTimeout(() => {
        notification.style.opacity = '0';
        setTimeout(() => notification.remove(), 300);
    }, 2000);
}








