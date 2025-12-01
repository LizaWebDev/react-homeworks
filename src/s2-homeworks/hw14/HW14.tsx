import React, {useEffect, useState} from 'react'
import s2 from '../../s1-main/App.module.css'
import s from './HW14.module.css'
import axios from 'axios'
import SuperDebouncedInput from './common/c8-SuperDebouncedInput/SuperDebouncedInput'
import {useSearchParams} from 'react-router-dom'

const getTechs = (find: string) => {
    return axios
        .get<{ techs: string[] }>(
            'https://samurai.it-incubator.io/api/3.0/homework/test2',
            {params: {find}}
        )
        .catch((e) => {
            alert(e.response?.data?.errorText || e.message)
        })
}

const HW14 = () => {
    const [find, setFind] = useState('')
    const [isLoading, setLoading] = useState(false)
    const [searchParams, setSearchParams] = useSearchParams()
    const [techs, setTechs] = useState<string[]>([])

    const sendQuery = (value: string) => {
        setLoading(true)
        getTechs(value)
            .then((res) => {
                // делает студент
                if (res && res.data) {
                    setTechs(res.data.techs)
                }
                // сохранить пришедшие данные
                setLoading(false)
            })
    }

    const onChangeText = (value: string) => {
        setFind(value)
        if (value) {
            setSearchParams({find: value})
        } else {
            setSearchParams({})
        }
    }

    useEffect(() => {
        const params = Object.fromEntries(searchParams)
        sendQuery(params.find || '')
        setFind(params.find || '')
    }, [])

    const mappedTechs = techs.map(t => (
        <div key={t} id={'hw14-tech-' + t} className={s.tech}>
            {t}
        </div>
    ))

    return (
        <div id={'hw14'} className={s2.container}>
            <div className={s2.hwTitle}>Homework #14</div>

            <div className={s2.hw}>
                <div className={s.container}>
                    <SuperDebouncedInput
                        id={'hw14-super-debounced-input'}
                        value={find}
                        onChangeText={onChangeText}
                        onDebouncedChange={sendQuery}
                        className={s.input}
                        placeholder="Enter search text..."
                    />

                    <div id={'hw14-loading'} className={s.loading}>
                        {isLoading ?
                            <div className={s.loadingText}>
                                <span>...ищем</span>
                            </div>
                            : <div className={s.emptyLoading}> </div>
                        }
                    </div>

                    <div className={s.techsContainer}>
                        {mappedTechs.length > 0 ? mappedTechs :
                            <div className={s.noResults}>
                                {!isLoading && 'No results found'}
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HW14
