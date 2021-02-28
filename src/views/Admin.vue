<template>
    <div>
        <h1>Adminpanel</h1> 
            <v-row>
                <v-col 
                    cols="12"
                    sm="6" 
                    md="6" 
                    xs="12"
                >
                    <MenuForm />
                </v-col>
                <v-col 
                    cols="12"
                    sm="6" 
                    md="6" 
                    xs="12"
                >
                    <DrinkForm />
                </v-col>
                <v-col 
                    cols="12"
                    sm="6" 
                    col="6" 
                    xs="12"
                >
                    <AdminTable />
                </v-col>
                <v-col 
                    cols="12"
                    sm="6" 
                    col="6" 
                    xs="12"
                >
                    <AdminTableDrinks />
                </v-col>
                <v-col 
                    cols="12"
                    sm="6" 
                    col="6" 
                    xs="12"
                >
                    <DeleteFood />
                </v-col>
                <v-col 
                    cols="12" 
                    sm="6"
                    col="6" 
                    xs="12"
                >
                    <DeleteDrink />
                </v-col>
                <v-col 
                    cols="12" 
                    col="12" 
                    xs="12"
                >
                    <EditFood />
                </v-col>
                <v-col 
                    cols="12" 
                    col="12" 
                    xs="12"
                >
                    <EditDrink />
                </v-col>
            
            </v-row>


    </div>
</template>

<script>
import MenuForm from '@/components/MenuForm'
import DrinkForm from '@/components/DrinkForm'
import AdminTable from '@/components/AdminTable'
import AdminTableDrinks from '@/components/AdminTableDrinks'
import DeleteFood from '@/components/DeleteFood'
import DeleteDrink from '@/components/DeleteDrink'
import EditFood from '@/components/EditFood'
import EditDrink from '@/components/EditDrink'

export default {
    name: "AddItem",
    components: {
        MenuForm,
        DrinkForm,
        AdminTable,
        AdminTableDrinks,
        DeleteFood,
        DeleteDrink,
        EditFood,
        EditDrink
    }
}
</script>