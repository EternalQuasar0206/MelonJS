﻿//------------------------------------------------------------------------------
// <auto-generated>
//     O código foi gerado por uma ferramenta.
//     Versão de Tempo de Execução:4.0.30319.42000
//
//     As alterações ao arquivo poderão causar comportamento incorreto e serão perdidas se
//     o código for gerado novamente.
// </auto-generated>
//------------------------------------------------------------------------------

namespace MelonJS.Properties {
    using System;
    
    
    /// <summary>
    ///   Uma classe de recurso de tipo de alta segurança, para pesquisar cadeias de caracteres localizadas etc.
    /// </summary>
    // Essa classe foi gerada automaticamente pela classe StronglyTypedResourceBuilder
    // através de uma ferramenta como ResGen ou Visual Studio.
    // Para adicionar ou remover um associado, edite o arquivo .ResX e execute ResGen novamente
    // com a opção /str, ou recrie o projeto do VS.
    [global::System.CodeDom.Compiler.GeneratedCodeAttribute("System.Resources.Tools.StronglyTypedResourceBuilder", "17.0.0.0")]
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute()]
    [global::System.Runtime.CompilerServices.CompilerGeneratedAttribute()]
    internal class Resources {
        
        private static global::System.Resources.ResourceManager resourceMan;
        
        private static global::System.Globalization.CultureInfo resourceCulture;
        
        [global::System.Diagnostics.CodeAnalysis.SuppressMessageAttribute("Microsoft.Performance", "CA1811:AvoidUncalledPrivateCode")]
        internal Resources() {
        }
        
        /// <summary>
        ///   Retorna a instância de ResourceManager armazenada em cache usada por essa classe.
        /// </summary>
        [global::System.ComponentModel.EditorBrowsableAttribute(global::System.ComponentModel.EditorBrowsableState.Advanced)]
        internal static global::System.Resources.ResourceManager ResourceManager {
            get {
                if (object.ReferenceEquals(resourceMan, null)) {
                    global::System.Resources.ResourceManager temp = new global::System.Resources.ResourceManager("MelonJS.Properties.Resources", typeof(Resources).Assembly);
                    resourceMan = temp;
                }
                return resourceMan;
            }
        }
        
        /// <summary>
        ///   Substitui a propriedade CurrentUICulture do thread atual para todas as
        ///   pesquisas de recursos que usam essa classe de recurso de tipo de alta segurança.
        /// </summary>
        [global::System.ComponentModel.EditorBrowsableAttribute(global::System.ComponentModel.EditorBrowsableState.Advanced)]
        internal static global::System.Globalization.CultureInfo Culture {
            get {
                return resourceCulture;
            }
            set {
                resourceCulture = value;
            }
        }
        
        /// <summary>
        ///   Consulta uma cadeia de caracteres localizada semelhante a console.log(&quot;Hello world!&quot;).
        /// </summary>
        internal static string NewProjectEntryPoint {
            get {
                return ResourceManager.GetString("NewProjectEntryPoint", resourceCulture);
            }
        }
        
        /// <summary>
        ///   Consulta uma cadeia de caracteres localizada semelhante a {
        ///    &quot;name&quot;: &quot;&quot;,
        ///    &quot;description&quot;: &quot;&quot;,
        ///    &quot;version&quot;: &quot;1.0.0&quot;,
        ///    &quot;website&quot;: &quot;&quot;,
        ///    &quot;entryPoint&quot;: &quot;build/index.js&quot;
        ///}.
        /// </summary>
        internal static string NewProjectMelonInfo {
            get {
                return ResourceManager.GetString("NewProjectMelonInfo", resourceCulture);
            }
        }
        
        /// <summary>
        ///   Consulta uma cadeia de caracteres localizada semelhante a {
        ///  &quot;scripts&quot;: {
        ///    &quot;go&quot;: &quot;npx tsc &amp;&amp; npx melon load .&quot;
        ///  },
        ///  &quot;dependencies&quot;: {
        ///    &quot;melon-types&quot;: &quot;latest&quot;
        ///  },
        ///  &quot;devDependencies&quot;: {
        ///    &quot;typescript&quot;: &quot;latest&quot;
        ///  }
        ///}.
        /// </summary>
        internal static string NewProjectPackageInfo {
            get {
                return ResourceManager.GetString("NewProjectPackageInfo", resourceCulture);
            }
        }
        
        /// <summary>
        ///   Consulta uma cadeia de caracteres localizada semelhante a ## 🍈 MelonJS Project
        ///
        ///| Command | Description |
        ///| ------- | ----------- |
        ///| `nm i melon-runtime -g` | Installs MelonJS (requires .NET 6 SDK and Runtime) |
        ///| `npm install` | (Only TypeScript) - Installs the required MelonJS types |
        ///| `npm run go` | Run the project |.
        /// </summary>
        internal static string NewProjectReadme {
            get {
                return ResourceManager.GetString("NewProjectReadme", resourceCulture);
            }
        }
        
        /// <summary>
        ///   Consulta uma cadeia de caracteres localizada semelhante a {
        ///    &quot;compilerOptions&quot;: {
        ///      &quot;outDir&quot;: &quot;build&quot;,
        ///        &quot;types&quot;: [
        ///          &quot;melon-types&quot;
        ///        ]
        ///    }
        ///}.
        /// </summary>
        internal static string NewProjectTsconfig {
            get {
                return ResourceManager.GetString("NewProjectTsconfig", resourceCulture);
            }
        }
    }
}