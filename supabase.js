import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.39.3'

const supabaseUrl = 'https://aywaehzoyoduuvqhuxtd.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF5d2FlaHpveW9kdXV2cWh1eHRkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ2NTM0MzgsImV4cCI6MjA2MDIyOTQzOH0.wyrthwnldbBJ2lnTd9md0T2hN68facjDJDnh8wtt_UU'

const options = {
    auth: {
        autoRefreshToken: true,
        persistSession: true,
        detectSessionInUrl: true
    }
}

const supabaseClient = createClient(supabaseUrl, supabaseAnonKey, options)

// Add error handling
supabaseClient.handleError = (error) => {
    console.error('Supabase Error:', error)
    if (error.message.includes('database error')) {
        console.error('Database Error Details:', error.details)
    }
}

export { supabaseClient } 