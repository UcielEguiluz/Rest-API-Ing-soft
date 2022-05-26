'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Proyecto extends Model {
    user(){
        return this.belongsTo('App/models/User')
    }
    tarea(){
        return this.hasMany('App/models/Tarea')
    }
}

module.exports = Proyecto
