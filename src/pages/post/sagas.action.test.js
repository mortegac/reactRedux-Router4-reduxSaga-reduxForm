/******************************************
*  TEST PARA sagas.action.js
*******************************************/
import assert from 'assert'
import axios from 'axios'
import { call, put } from 'redux-saga/effects'
import posts from './sagas.action'

describe('Fetch actions', () => {

     describe('#fetch', () => {
        it('catches errors', () => {
            const gen = posts.fetch()

            //Fetch todo start
            assert.deepEqual(
                gen.next().value,
                put({ type: 'FETCH_POST_START' }),
                'No se disparó el evento'
            )

            //Call to API - FETCH_POST_SUCCESS
            assert.deepEqual(
                gen.next().value,
                call(
                axios.get,
                'https://jsonplaceholder.typicode.com/posts'
                ),
                'No retorna los Post'
            )

            //Provoco un error para testearlo
            assert.deepEqual(
                gen.throw('Provoco-Error').value,
                put({
                type: 'FETCH_POST_FAILED',
                error: 'Provoco-Error',
                }), 'No se está disparando el evento que maneja el error'
            )


        })
    })


            
          


})

