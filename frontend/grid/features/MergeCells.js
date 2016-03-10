
Ext.define('App.project.modules.plngpv.MergeCells', {
    extend: 'Ext.grid.feature.Feature',

    alias: 'feature.mergeCells',

    mColumns: [],

    cellHeight: 25,

    /*
     * Объект, хранящий свойства ячеек
     * */
    cellPropertiesList: {},

    /*
     * Формируем "карту" по которой объединяются ячейки заданные в mColumns столбцах
     * */
    getMergeMap: function() {
        var me = this,
            model = me.getGridStore(),
            cellHeightSize = {},
            getHeightSize = function(dataIndex) {
                var gridData = model.getData(),
                    sizeList = [];

                gridData.each(function(data, index) {
                    if (index > 0) {
                        if (gridData.items[index - 1].get(dataIndex) == data.get(dataIndex)) {
                            sizeList[sizeList.length - 1]++
                        } else {
                            sizeList.push(1);
                        }
                    } else {
                        sizeList.push(1);
                    }
                });
                return sizeList;
            };

        for (var i = 0; i < me.mColumns.length; i++) {
            cellHeightSize[me.mColumns[i]] = getHeightSize(me.mColumns[i]);
        }

        return cellHeightSize;
    },
    /*
     * Проходим по ячейкам выбранной колонки, и растягиваем по высоте первую из идентичных
     * */
    walkOnTheCells: function(grid, dataIndex) {
        var me = this,
            view = me.view,
            megreMap = me.getMergeMap(),
            gridColumns = grid.getColumns(),
            renderCol;

        me.cellPropertiesList[dataIndex] = {
            cellRate: []
        };

        for (var i = 0; i < gridColumns.length; i++) {
            if (gridColumns[i].dataIndex == dataIndex) {
                renderCol = gridColumns[i];
                break;
            }
        }

        //console.log('renderCol:', dataIndex, renderCol, megreMap, me.cellPropertiesList);

        if (renderCol) {
            renderCol.renderer = function(value, meta, record, rowIndex, colIndex, view) {

                megreMap[dataIndex].reduce(function(prevVal, item, index, array) {

                    if (prevVal == rowIndex) {

                        if (meta && item > 1) {
                            meta.align = 'center';

                            meta.style += 'position: absolute;';
                            meta.style += 'width: ' + (renderCol.cellWidth - 1) + 'px;';
                            meta.style += 'background-color: #FFF;';
                            meta.style += 'height: ' + (me.cellHeight * megreMap[dataIndex][index] - 1) + 'px;';
                            meta.style += 'z-index: 20;';
                            //meta.style += 'white-space: pre-line;';
                        }
                    }
                    return prevVal + item;
                }, 0);


                return value
            };
        }
    },
    onCellMouseOver: function() {
        var me = this,
            view = me.view;

        view.getEl().on('mouseover', function(event, dom) {

            if (event.getTarget().className == 'x-grid-cell-inner ') {
                var gridColumnId = event.getTarget().parentElement.dataset.columnid,
                    gridColumn = me.getGridColumnById(gridColumnId),
                    gridCell = view.getCell(event.getTarget(), gridColumn);

                view.fireEvent('cellmouseover', gridCell);
            }
        });
    },
    onCellMouseOut: function() {
        var me = this,
            view = me.view;

        view.getEl().on('mouseout', function(event, dom) {

            if (event.getTarget().className == 'x-grid-cell-inner ') {
                var gridColumnId = event.getTarget().parentElement.dataset.columnid,
                    gridColumn = me.getGridColumnById(gridColumnId),
                    gridCell = view.getCell(event.getTarget(), gridColumn);

                view.fireEvent('cellmouseout', gridCell);
            }
        });
    },
    getGridColumnById: function(columnId) {
        var me = this,
            view = me.view,
            colManager = view.getColumnManager(),
            columns = colManager.getColumns(),
            len = columns.length;

        for (var i = 0; i < len; ++i) {
            if (columns[i].getId() === columnId) {
                return columns[i];
            }
        }

        return false;
    },
    getGridStore: function() {
        return this.view.getStore();
    },
    init: function(grid) {
        var me = this,
            view = me.view,
            model = me.getGridStore(),
            megreMap = me.getMergeMap();

        grid.getSelectionModel().setSelectionMode('MULTI');

        me.mColumns.forEach(function(item, index, arr) {
            me.walkOnTheCells(grid, item);
        });

        grid.on('afterrender', function() {
            me.onCellMouseOver();
            me.onCellMouseOut();
        })

        /*view.on('beforecellclick', function(){
         console.log('beforecellclick:', arguments);
         return false;
         });

         view.on('cellmouseover', function(){
         console.log('cellmouseover:', arguments);
         });

         view.on('cellmouseout', function(){
         console.log('cellmouseout:', arguments);
         });*/

        me.callParent(arguments);
    }
})