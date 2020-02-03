'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Category extends Model {
  static getDefaultCategoryID() {
    return 1
  }
}

module.exports = Category