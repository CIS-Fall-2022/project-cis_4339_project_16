<template>
    <div>
        <hr class="mt-10 mb-10" />
        <!-- Display Found Data -->
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10">
            <div class="flex flex-col col-span-2">
                <table class="min-w-full shadow-md rounded">
                    <thead class="bg-gray-50 text-xl">
                        <tr>
                            <th class="p-4 text-left">Event Name</th>
                            <th class="p-4 text-left">Event Date</th>
                            <th class="p-4 text-left">Number of Clients</th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-gray-300">
                        <tr v-for="event in tableData" :key="event.name">
                            <td class="p-2 text-left">{{ event.name }}</td>
                            <td class="p-2 text-left">{{ formattedDate(event.date) }}</td>
                            <td class="p-2 text-left">{{ event.numClients }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";
import { DateTime } from "luxon";

export default {
    name: 'DashTable',
    data() {
        return {
            tableData: {},
        }
    },
    mounted() {
        axios.get(
            import.meta.env.VITE_ROOT_API + `/dashboardData`
        ).then((resp) => {
            this.tableData = resp.data
        })
    },
    methods: {
        formattedDate(datetimeDB) {
            return DateTime.fromISO(datetimeDB).plus({ days: 1 }).toLocaleString();
        },
    }
}

</script>